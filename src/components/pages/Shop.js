import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductsAction } from '../../actions/fetchProductsAction';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
class Shop extends Component {
    componentWillMount() {
        this.props.fetchProductsAction();
    }
    render() {
        console.log(this.props.products);
        const products = this.props.products;
		const productsList = (products) ? (
				products.products.map(product =>{
					return(
                        <Col key={product.product_id} md="6" lg="4">
                          <div className="single-product">
                            <div className="product-img">
                              <img
                                className="card-img"
                                src={"http://demo.opencart.com/"+ product.thumb}
                                alt=""
                              />
                              <div className="p_icon">
                                <NavLink to={"product/"+product.seo}>
                                  <i className="fa fa-eye"></i>
                                </NavLink>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </div>
                            </div>
                            <div className="product-btm">
                              <a href="#" className="d-block">
                                <h4>{product.name}</h4>
                              </a>
                              <div className="mt-3">
                                <span className="mr-4">{product.currency}{(product.special) ? product.special : product.price}</span>
                                <del>{(product.special) ? product.currency+product.price :""}</del>
                              </div>
                            </div>
                          </div>
                        </Col>
                        )	
                    })
                
                ) : (
                    <div className="productlist">
                        <p>Loading... </p>
                    </div>
                )
        return (
            <section className="cat_product_area section_gap">
              <div className="container">
                <div className="row flex-row-reverse">
                  <div className="col-lg-9">
                    <div className="product_top_bar">
                      <div className="left_dorp">
                        <select className="sorting">
                          <option value="1">Default sorting</option>
                          <option value="2">Default sorting 01</option>
                          <option value="4">Default sorting 02</option>
                        </select>
                        <select className="show">
                          <option value="1">Show 12</option>
                          <option value="2">Show 14</option>
                          <option value="4">Show 16</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="latest_product_inner">
                      <div className="row mb-5">
                        {productsList}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="left_sidebar_area">
                      <aside className="left_widgets p_filter_widgets">
                        <div className="l_w_title">
                          <h3>Browse Categories</h3>
                        </div>
                        <div className="widgets_inner">
                          <ul className="list">
                            <li>
                              <a href="#">Frozen Fish</a>
                            </li>
                            <li>
                              <a href="#">Dried Fish</a>
                            </li>
                            <li>
                              <a href="#">Fresh Fish</a>
                            </li>
                            <li>
                              <a href="#">Meat Alternatives</a>
                            </li>
                            <li>
                              <a href="#">Fresh Fish</a>
                            </li>
                            <li>
                              <a href="#">Meat Alternatives</a>
                            </li>
                            <li>
                              <a href="#">Meat</a>
                            </li>
                          </ul>
                        </div>
                      </aside>

                      <aside className="left_widgets p_filter_widgets">
                        <div className="l_w_title">
                          <h3>Product Brand</h3>
                        </div>
                        <div className="widgets_inner">
                          <ul className="list">
                            <li>
                              <a href="#">Apple</a>
                            </li>
                            <li>
                              <a href="#">Asus</a>
                            </li>
                            <li className="active">
                              <a href="#">Gionee</a>
                            </li>
                            <li>
                              <a href="#">Micromax</a>
                            </li>
                            <li>
                              <a href="#">Samsung</a>
                            </li>
                          </ul>
                        </div>
                      </aside>

                      <aside className="left_widgets p_filter_widgets">
                        <div className="l_w_title">
                          <h3>Color Filter</h3>
                        </div>
                        <div className="widgets_inner">
                          <ul className="list">
                            <li>
                              <a href="#">Black</a>
                            </li>
                            <li>
                              <a href="#">Black Leather</a>
                            </li>
                            <li className="active">
                              <a href="#">Black with red</a>
                            </li>
                            <li>
                              <a href="#">Gold</a>
                            </li>
                            <li>
                              <a href="#">Spacegrey</a>
                            </li>
                          </ul>
                        </div>
                      </aside>

                      <aside className="left_widgets p_filter_widgets">
                        <div className="l_w_title">
                          <h3>Price Filter</h3>
                        </div>
                        <div className="widgets_inner">
                          <div className="range_item">
                            <div id="slider-range"></div>
                            <div className="">
                              <label for="amount">Price : </label>
                              <input type="text" id="amount" readonly />
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
})
export default connect(mapStateToProps, { fetchProductsAction })(Shop);
