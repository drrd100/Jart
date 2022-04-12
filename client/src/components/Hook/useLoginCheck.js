import { useEffect, useState } from 'react'

export default function useLoginCheck() {
    const [isLogin, setIsLogin] = useState(false)
    

    useEffect(() => {
      if(sessionStorage.getItem('user_id') === null){
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
        setIsLogin(true)
      }
    },[isLogin])
    
  return {isLogin}
}
