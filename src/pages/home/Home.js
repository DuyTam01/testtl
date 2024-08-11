import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "../../css/home.css"
import { Container } from 'reactstrap'
import img1 from "../../images/family.jpg"

export default function Home() {
  
  return (
    <div>
      <Header />

      <Container id= "home">
            <div class="row vertical-content">
                <div class="col-7">
                    <h5 class="pt-5 header-title">Săn đồ rẻ chả lo về giá</h5>
                    <button id="btn_learnmore">Mua ngay </button>
                </div>
                <div class="col-5">
                    {/* <img src="../images/family.jpg" alt="img_mockup"/> */}
                    {/* <image src="../images/family.jpg"></image> */}
                    <img
          alt="Card cap"
          src= {img1}
          width="100px"
           />
                </div>


            </div>
            </Container>

      <Container id= "gia-ca">


    <div>
    giá cả phải chăng
    </div>
      </Container>

      <Container id= "san-pham">
<div>   sản phẩm chất lượng</div>
</Container>
<Container id= "thanh-toan">
<div>
  thnah toan nhanh chóng
</div>
</Container>
<Container id= "giao-hang">
<div>
  giao hàng nhanh chóng
</div>
</Container>


<a href="javascript:void(0)" class="back_top"> <i class="mbri-arrow-up"> </i> </a>

      <Footer/>
    </div>
  )
}
