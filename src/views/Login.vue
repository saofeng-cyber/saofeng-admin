<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElButton, ElMessage } from "element-plus";
import axios from "axios";
import { UseSession } from "../store";
import { Router, useRouter } from "vue-router";
const useSession = UseSession();
const username = ref("");
const password = ref("");
const userouter: Router = useRouter();
const login = () => {
  axios
    .post("http://localhost:3000/api/admin/login", {
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      if (res.data.success === "true") {
        ElMessage({
          message: "登陆成功",
          showClose: true,
          type: "success",
        });
        useSession.setSession(res.data.userInfo.password);
        userouter.push({ name: "/" });
      } else {
        ElMessage({
          message: "登陆失败",
          type: "warning",
          showClose: true,
        });
      }
    });
};
</script>
<template>
  <div class="login-container">
    <div class="svg"></div>
    <div class="login">
      <el-avatar
        :size="64"
        fit="fill"
        src="https://q.qlogo.cn/headimg_dl?dst_uin=942391953&spec=640"
      />
      <p>Welcome to Login</p>
      <input
        type="username"
        name="username"
        id="user"
        v-model="username"
        placeholder="请输入用户名"
      />
      <input
        type="password"
        name="password"
        id="pwd"
        placeholder="请输入密码"
        v-model="password"
      />
      <!-- <div class="checkCode">
        <input type="text" name="yzm" id="yzm" maxlength="6" />
        <img
          src=""
          alt="验证码"
          srcset=""
          style="color: #fff"
          width="100%"
          height="100%"
        />
      </div> -->
      <el-button class="btn" color="#547da9" size="default" @click="login"
        >LOGIN</el-button
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/src/assets/bg2.jpg");
  background-size: cover;
  .svg {
    position: absolute;
    // left: 75px;
    // top: 50px;
    display: none;
  }
  .login {
    position: absolute;
    width: 450px;
    height: 420px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.52);
    border-radius: 2vh;
    padding: 15px;
    input {
      width: 270px;
      height: 40px;
      margin: 15px 5px;
      padding: 10px 15px 10px 15px;
      border-bottom: 2px rgb(255, 255, 255) solid;
      background-color: transparent;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
    }
    .checkCode {
      width: 270px;
      display: flex;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      #yzm {
        width: 180px;
        height: 100%;
      }
      img {
        width: 90px;
        height: 100%;
      }
    }
    input::placeholder {
      color: #ccc;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
    }
    input::-moz-placeholder {
      color: #ccc;
    }
    p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      color: rgb(255, 255, 255);
    }
    .btn {
      width: 240px;
      color: #fff;
      font-weight: 16px;
      font-weight: bold;
      margin-top: 15px;
    }
  }
}
</style>
