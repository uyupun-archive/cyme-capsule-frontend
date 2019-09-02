<template>
  <div>
    <h2 class="c-title">新規登録</h2>
    <div class="mb-3">
      <label class="mb-0">ユーザーID</label>
      <p>※ 13桁で入力して下さい。英字数字ハイフンのみ使用できます。</p>
      <input
        v-model="form.userId"
        type="text"
        class="form-control"
        placeholder="ユーザーID"
      />
    </div>
    <div class="mb-3">
      <label>パスワード</label>
      <input
        v-model="form.password"
        type="password"
        class="form-control"
        placeholder="パスワード"
      />
    </div>
    <div class="text-center mb-5">
      <button type="button" class="btn btn-lightgreen px-5" @click="submit">
        新規登録
      </button>
    </div>
    <div class="mb-3">
      <router-link to="/login">&lt; ログイン画面へ</router-link>
    </div>
    <div>
      <router-link to="/">&lt; トップへ戻る</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        userId: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({ register: 'user/register' }),
    async submit() {
      try {
        await this.register({
          userId: this.form.userId,
          password: this.form.password
        })
        this.$router.push('/capsules')
      } catch (e) {
        throw e
      }
    }
  }
}
</script>
