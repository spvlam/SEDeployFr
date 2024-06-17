'use client'
import { useRouter,useSearchParams } from 'next/navigation'
import { PARAMETER_USER ,LOCAL_STORAGE} from '@/config/API_config'; 

const Component = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    // const { accessToken, refreshToken, name } = router.query;
    const name= searchParams.get(PARAMETER_USER.name) ;
    const accessToken = searchParams.get(PARAMETER_USER.accessToken) ;
    const refreshToken = searchParams.get(PARAMETER_USER.refreshToken) ;
    console.log(name)

  if (accessToken && refreshToken && name) {
    // Process the JSON data as needed
    localStorage.setItem(LOCAL_STORAGE.accessToken, accessToken[0]);
    localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken[0]);
    localStorage.setItem(LOCAL_STORAGE.userName, name[0]);
    // Redirect to the root URL
    router.push('/');
  }

  return <div>Processing...</div>;
};

export default Component;
