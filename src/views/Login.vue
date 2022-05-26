<script lang="ts" setup>
import { reactive } from "vue";
import { ElButton, ElMessage } from "element-plus";
import { UseToken } from "../store";
import { Router, useRouter } from "vue-router";
import { login } from "@/api/api";
import "@/style/login/login.scss";
const useToken = UseToken();
const params = reactive({
  username: "",
  password: "",
});
const userouter: Router = useRouter();
const loginPAge = () => {
  login(params)
    .then((res) => {
      if (res.data.msg === "登录成功") {
        useToken.setToken(res.data.userInfo.token);
        console.log(useToken.token);
        ElMessage({
          message: res.data.msg,
          type: "success",
          showClose: true,
        });
        userouter.push({ name: "首页" });
      }
    })
    .catch((error) => {
      console.log(error);
      ElMessage({
        message: error.message,
        type: "warning",
        showClose: true,
      });
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
        v-model="params.username"
        placeholder="请输入用户名"
      />
      <input
        type="password"
        name="password"
        id="pwd"
        placeholder="请输入密码"
        v-model="params.password"
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
      <el-button class="btn" color="#547da9" size="default" @click="loginPAge"
        >LOGIN</el-button
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
// @import url("@/style/login/login.scss");
</style>
