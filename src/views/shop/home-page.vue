<script setup></script>

<template>
  <div class="outer">
    <!-- 第一模块 -->
    <div class="fs">
      <!-- 左边菜单 -->
      <div class="left-list">
        <ul class="menu">
          <li class="electronics">电子产品</li>
          <li class="necessity">生活用品</li>
          <li class="home appliances">家电</li>
          <li class="clothing">服装</li>
          <li class="medicine">医药</li>
          <li class="books">图书</li>
        </ul>
      </div>
      <!-- 中间照片轮播 -->
      <div class="center">
        <!-- 轮播的照片 -->
        <div class="slider">
          <button class="prev-btn">&#10094;</button>
          <img class="slide" src="默认标题__2023-08-21+16_06_45.jpeg" alt="Image 1" />
          <img class="slide" src="f4debd861b7e472eb850764d02a649c2.jpeg" alt="Image 2" />
          <img class="slide" src="默认标题__2023-08-21+16_14_42.png" alt="Image 3" />
          <button class="next-btn">&#10095;</button>
        </div>
        <!-- 分页器 -->
        <div class="pagination"></div>
      </div>
      <!-- 右边用户登录 -->
      <div class="right-user">
        <!-- 头像 -->
        <img class="avatar" src="" alt="" />
        <!-- 欢迎 -->
        <div class="welcome">Hi 欢迎光临</div>
        <!-- 登录与注册 -->
        <div class="user">
          <a href="" class="login">登录</a>
          <a href="" class="register">注册</a>
        </div>
      </div>
    </div>

    <!-- 第二模块 -->
    <div class="comRecommend">
      <!-- 标题 -->
      <div class="title">
        <h3 class="tl">为你推荐</h3>
      </div>
      <!-- 样式 -->
      <div>
        <ul class="com-rec-list">
          <!-- 第一行 -->
          <li class="floor">
            <ul class="floor1-list">
              <!-- 第一个 -->
              <li class="list1">
                <a href="">
                  <!-- 图片 -->
                  <div class="picture">
                    <img src="" alt="" />
                  </div>
                  <!-- 名字 -->
                  <div class="name"></div>
                  <!-- 价格 -->
                  <div class="moneySign">¥</div>
                  <div class="price"></div>
                </a>
              </li>
              <!-- 第二个 -->
              <li class="list2">
                <a href="">
                  <!-- 图片 -->
                  <div class="picture">
                    <img src="" alt="" />
                  </div>
                  <!-- 名字 -->
                  <div class="name"></div>
                  <!-- 价格 -->
                  <div class="moneySign">¥</div>
                  <div class="price"></div>
                </a>
              </li>
              <li class="list3">
                <a href="">
                  <!-- 图片 -->
                  <div class="picture">
                    <img src="" alt="" />
                  </div>
                  <!-- 名字 -->
                  <div class="name"></div>
                  <!-- 价格 -->
                  <div class="moneySign">¥</div>
                  <div class="price"></div>
                </a>
              </li>
              <li class="list4">
                <a href="">
                  <!-- 图片 -->
                  <div class="picture">
                    <img src="" alt="" />
                  </div>
                  <!-- 名字 -->
                  <div class="name"></div>
                  <!-- 价格 -->
                  <div class="moneySign">¥</div>
                  <div class="price"></div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- 尾部 -->
    <div class="footer">
      <div class="footer-container">
        <!-- 尾部模块一 -->
        <div class="footerList">
          <div class="footerItem">
            <h4>购物指南</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行/团购</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>配送方式</h4>
            <ul class="footerItemCon">
              <li>上门自提</li>
              <li>211限时达</li>
              <li>配送服务查询</li>
              <li>配送费收取标准</li>
              <li>海外配送</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>支付方式</h4>
            <ul class="footerItemCon">
              <li>货到付款</li>
              <li>在线支付</li>
              <li>分期付款</li>
              <li>邮局汇款</li>
              <li>公司转账</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>售后服务</h4>
            <ul class="footerItemCon">
              <li>售后政策</li>
              <li>价格保护</li>
              <li>退款说明</li>
              <li>返修/退换货</li>
              <li>取消订单</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>特色服务</h4>
            <ul class="footerItemCon">
              <li>夺宝岛</li>
              <li>DIY装机</li>
              <li>延保服务</li>
              <li>尚品汇E卡</li>
              <li>尚品汇通信</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer {
  .fs {
    width: 1200px;
    height: 420px;

    .left-list {
      position: absolute;
      left: 45px;
      top: 45px;
      width: 300px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .menu {
        line-height: 70px;
        font-size: 30px;
        font-weight: 400;
        overflow: hidden;
        padding: 0 20px;
        margin: 0;
      }
    }

    .center {
      position: absolute;
      left: 345px;
      top: 45px;
      box-sizing: border-box;
      width: 600px;
      padding: 5px;
      float: left;

      .slider {
        position: relative;
        overflow: hidden;
        max-width: 600px;
        height: 420px;

        white-space: nowrap;
      }

      .silde {
        width: 100%;
        height: 420px;
        display: inline-flex;
        object-fit: cover;
      }

      .prev-btn,
      .next-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 1;
      }

      .prev-btn {
        left: 10px;
      }

      .next-btn {
        right: 10px;
      }
    }

    .right-user {
      position: absolute;
      left: 945px;
      top: 47px;
      float: right;
      width: 300px;
      height: 420;
      background: #fafafa;

      .avatar {
        height: 100px;
        width: 100px;
      }

      .welcome {
        font-size: 20px;
      }
    }
  }

  .comRecommend {
    position: absolute;
    top: 465px;
    left: 45px;
    margin-top: 15px;
    width: 1200px;
    height: 350px;
    margin: 0 auto;

    .title {
      .tl {
        float: left;
        font-size: 40px;
        line-height: 40px;
        margin: 9px 0;
        font-weight: 700;
      }

      .com-rec-list {
        position: absolute;
        top: 505px;
        overflow: hidden;
        padding: 10px;
        height: 310px;

        .ul {
          height: 300px;
          padding: 1px;

          .li {
            width: 300px;
            padding: 1px;
            overflow: hidden;
            list-style: none;
            line-height: 18px;

            .picture {
              width: 230px;
              height: 210px;
              overflow: hidden;
              text-align: center;
              margin: 5px auto 18px;
            }

            .name {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;
            }

            .price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }

  .footer {
    position: absolute;
    top: 815px;
    background-color: #eaeaea;

    .footer-container {
      width: 1200px;
      margin: 0 auto;
      padding: 0 15px;

      .footerList {
        padding: 20px;
        border-bottom: 1px solid #e4e1e1;
        border-top: 1px solid #e4e1e1;
        overflow: hidden;
        padding-left: 40px;

        .footerItem {
          width: 16.6666667%;
          float: left;

          h4 {
            font-size: 14px;
          }

          .footerItemCon {
            li {
              line-height: 18px;
            }
          }

          &:last-child img {
            width: 121px;
          }
        }
      }
    }
  }
}
</style>
