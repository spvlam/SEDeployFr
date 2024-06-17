import { API_SERVER_CONFIG, LOCAL_STORAGE } from '@/config/API_config'
import { toast } from 'react-hot-toast'


export class userAction {
  async login (
    e: React.FormEvent<HTMLFormElement> | Event,
    email: string,
    password: string
  ) {
    e.preventDefault()
    const submitData = { email, password }
    try {
      let res = await fetch(API_SERVER_CONFIG.login, {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (res.status == 200) {
        const data = await res.json()
        console.log(data)
        const { accessToken, refreshToken, name,user_id } = data

        // Store the tokens in localStorage or a state management solution
        localStorage.setItem(LOCAL_STORAGE.accessToken, accessToken)
        localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken)
        localStorage.setItem(LOCAL_STORAGE.userName, name)
        localStorage.setItem(LOCAL_STORAGE.user_id,user_id)
        window.location.href = '/'
      } else if (res.status == 300) {
        toast('user not found')
      }
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  async register (
    e: React.FormEvent<HTMLFormElement> | Event,
    email: string,
    password: string,
    username: string
  ) {
    e.preventDefault()
    const submitData = { email, password,username }
    try {
      let res = await fetch(API_SERVER_CONFIG.register, {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'content-type': 'application/json'
        }
      })
   
      if (res.status == 200) {
        toast.success('Check your email');
      } else if (res.status == 400) {
        toast.success('chose the strong password')
      }else if(res.status == 409){
        toast.success('This account has been exist')
      }
    } catch (error) {
    
      console.log(error)
    }
  }
  async logout () {
    try {
      
      const refreshtoken = localStorage.getItem(LOCAL_STORAGE.refreshToken)
      
      const headers = {
        'content-type': 'application/json',
        ...(refreshtoken ? { refreshtoken: refreshtoken } : {})
      }
      let res = await fetch(API_SERVER_CONFIG.logout, {
        method: 'POST',
        headers: headers
      })
      console.log(res)
      if (res.status == 200) {
        const data = await res.json()
        console.log(data)
        localStorage.removeItem(LOCAL_STORAGE.accessToken)
        localStorage.removeItem(LOCAL_STORAGE.refreshToken)
        localStorage.removeItem(LOCAL_STORAGE.userName)
        window.location.href = '/login'
      }
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  async login_facebook () {
    try {
      let res = await fetch(API_SERVER_CONFIG.login_facebook, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status == 200) {
        const data = await res.json()
        const { accessToken, refreshToken, name } = data

        // Store the tokens in localStorage or a state management solution
        localStorage.setItem(LOCAL_STORAGE.accessToken, accessToken)
        localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken)
        localStorage.setItem(LOCAL_STORAGE.userName, name)
        window.location.href = '/'
      } else if (res.status == 300) {
        toast('user not found')
      }
    } catch (error) {
      console.log(error)
    }
  }
  async login_google () {}
}
