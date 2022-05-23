<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElButton, ElMessage } from "element-plus";
import axios from "axios";
import { UseSession } from "../store";
import { Router, useRouter } from "vue-router";
import "@/style/login/login.scss";
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
<style scoped lang="scss"></style>
