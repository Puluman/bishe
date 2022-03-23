<template>
  <div id="main">
    <div class="loginForm">
      <h2 class="title">Login</h2>
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="name:" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="password:" prop="pass">
          <el-input type="password" v-model="form.pass" autocomplete="off" />
        </el-form-item>
        <el-form-item label="role:" prop="role">
          <el-radio-group v-model="form.role">
            <el-radio label="1" class="labelsize">游客</el-radio>
            <el-radio label="2" class="labelsize">旅行社</el-radio>
            <el-radio label="3" class="labelsize">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="buttonBox">
          <el-form-item label-width="0">
            <el-button type="primary" @click="submitForm('form')" class="submitclass">登录</el-button>
            <el-button @click="newperson()" class="newclass" >注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      labelPosition: 'right',
        form: {
          name: '',
          pass: '',
          role: '1'
        },
        rules: {
          name: [
            { required:true, message: '请输入用户名', trigger: 'blur' }
          ],
          pass: [
            { required:true, message: '请输入密码', trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
        } else {
          console.log('请输入正确的用户名或密码');
          return false;
        }
      });
    },
    newperson(){
      this.$nextTick(() => {
        this.$router.replace({
          path: '/new'
        })
      })
    }
  }
}
</script>

<style>
  #main {
    height: 100%;
    width: 100%;
    background-image: url(../assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
  }
  
  .loginForm {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #ffffffa1;
    padding: 8px 15px 8px 8px;
    border-radius: 10px;
  }

  .buttonBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submitclass {
    width: 100px;
    height: 40px;
  }

  .el-button+.el-button.newclass {
    width: 100px;
    height: 40px;
    margin-left: 50px;
  }

  .el-form-item--default .el-form-item__label{
    line-height: 36px;
    font-size: 18px;
    color: #000;
  }

  .el-radio__label {
    font-size: 16px;
    color: #000;
    padding-left: 8px
  }

  .title {
    height: 40px;
    line-height: 40px;
    width: 100%;
    margin-bottom: 10px;
  }

  .buttonBox .el-form-item__content {
    margin-left: 0;
  }
</style>