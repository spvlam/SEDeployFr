"use client"
import { NoSymbolIcon, CheckIcon } from '@heroicons/react/24/outline'
import NcInputNumber from '@/components/NcInputNumber'
import Prices from '@/components/Prices'
import { Product, PRODUCTS } from '@/data/data'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import Image from 'next/image'
import Link from 'next/link'
import { API_SERVER_CONFIG, LOCAL_STORAGE } from '@/config/API_config'
import {  useEffect, useState } from 'react'

export default  function CartPage () {
 
  let [data, setProductCart] = useState<Product[]>([])
  let [total,setTotal] = useState(0)
  const getCart = async (id:any)=>{
  try {
   let accessToken = localStorage.getItem(LOCAL_STORAGE.accessToken) 
    let refreshToken =  localStorage.getItem(LOCAL_STORAGE.refreshToken) 
   if(accessToken == null || refreshToken == null){
     accessToken = refreshToken = "abc"
   }
    let user_id = localStorage.getItem(LOCAL_STORAGE.user_id)
    if(user_id==null){ user_id = '1'};
    const res = await fetch(API_SERVER_CONFIG.product_carts+user_id,{method:'GET', headers: {
      'content-type': 'application/json',
       accessToken,
       refreshToken
    }})
    if(res){
      let dataCart = await res.json()
      const totalPrice = dataCart.reduce((curTotal: number, item: Product) => {

        if (typeof item.price === 'string') {
          item.price = parseInt(item.price, 10);
        } 
        return curTotal +  item.price;
      }, 0);
      setTotal(totalPrice)
     
      if(res.status == 200){
        setProductCart(dataCart)
      }else{
        setProductCart([])
      }
    }
  } catch (error) {
    // setProductCart(PRODUCTS2)
    console.error(error)
  }
 }
  useEffect(() => {
    getCart(localStorage.getItem(LOCAL_STORAGE.user_id))
  }, [])
  async function removeProdcut(product_id:Number) {
    let accessToken = localStorage.getItem(LOCAL_STORAGE.accessToken) 
    let refreshToken =  localStorage.getItem(LOCAL_STORAGE.refreshToken) 
    let user_id = localStorage.getItem(LOCAL_STORAGE.user_id)

   if(accessToken == null || refreshToken == null){
     accessToken = refreshToken = "abc"
   }
    let resRemove = await fetch(API_SERVER_CONFIG.product_carts_remove+user_id+'/'+product_id,{
      method:'DELETE',
      headers:{
        'content-type': 'application/json',
        accessToken,
        refreshToken
      }
    })
    if(resRemove){
      window.location.href = '/cart'
    }
    
  }
  const renderStatusSoldout = () => {
    return (
      <div className='rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'>
        <NoSymbolIcon className='w-3.5 h-3.5' />
        <span className='ml-1 leading-none'>Sold Out</span>
      </div>
    )
  }

  const renderStatusInstock = () => {
    return (
      <div className='rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'>
        <CheckIcon className='w-3.5 h-3.5' />
        <span className='ml-1 leading-none'>In Stock</span>
      </div>
    )
  }

  const renderProduct = (item: Product, index: number) => {
    const { image, price, name,id } = item

    return (
      <div
        key={index}
        className='relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0'
      >
        <div className='relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100'>
          <Image
            fill
            src={image}
            alt={name}
            sizes='300px'
            className='h-full w-full object-contain object-center'
          />
          <Link href='/product-detail' className='absolute inset-0'></Link>
        </div>

        <div className='ml-3 sm:ml-6 flex flex-1 flex-col'>
          <div>
            <div className='flex justify-between '>
              <div className='flex-[1.5] '>
                <h3 className='text-base font-semibold'>
                  <Link href='/product-detail'>{name}</Link>
                </h3>
                <div className='mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300'>
                  <div className='flex items-center space-x-1.5'>
                    <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8.35 1.94995L9.69 3.28992'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M2.07 11.92L17.19 11.26'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 22H16'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>

                    <span>{`Black`}</span>
                  </div>
                  <span className='mx-4 border-l border-slate-200 dark:border-slate-700 '></span>
                  <div className='flex items-center space-x-1.5'>
                    <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M21 9V3H15'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 15V21H9'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21 3L13.5 10.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10.5 13.5L3 21'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>

                    <span>{`2XL`}</span>
                  </div>
                </div>

                <div className='mt-3 flex justify-between w-full sm:hidden relative'>
                  <select
                    name='qty'
                    id='qty'
                    className='form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800 '
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                  </select>
                  <Prices
                    contentClass='py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full'
                    price={price}
                  />
                </div>
              </div>

              <div className='hidden sm:block text-center relative'>
                <NcInputNumber className='relative z-10' />
              </div>

              <div className='hidden flex-1 sm:flex justify-end'>
                <Prices price={price} className='mt-0.5' />
              </div>
            </div>
          </div>

          <div className='flex mt-auto pt-4 items-end justify-between text-sm'>
            {Math.random() > 0.6
              ? renderStatusSoldout()
              : renderStatusInstock()}

            <a
              href='##'
              className='relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm '
            >
              <span onClick={() => removeProdcut(id)}>Remove</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='nc-CartPage'>
      <main className='container py-16 lg:pb-28 lg:pt-20 '>
        <div className='mb-12 sm:mb-16'>
          <h2 className='block text-2xl sm:text-3xl lg:text-4xl font-semibold '>
            Shopping Cart
          </h2>
          <div className='block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400'>
            <Link href={'/'} className=''>
              Homepage
            </Link>
            <span className='text-xs mx-1 sm:mx-1.5'>/</span>
            <Link href={'/collection'} className=''>
              Clothing Categories
            </Link>
            <span className='text-xs mx-1 sm:mx-1.5'>/</span>
            <span className='underline'>Shopping Cart</span>
          </div>
        </div>

        <hr className='border-slate-200 dark:border-slate-700 my-10 xl:my-12' />

        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200 dark:divide-slate-700 '>
            {data.length > 0 && data.map(renderProduct)}
          </div>
          <div className='border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0'></div>
          <div className='flex-1'>
            <div className='sticky top-28'>
              <h3 className='text-lg font-semibold '>Order Summary</h3>
              <div className='mt-7 text-sm text-slate-500 dark:text-slate-400 divide-y divide-slate-200/70 dark:divide-slate-700/80'>
                <div className='flex justify-between pb-4'>
                  <span>Subtotal</span>
                  <span className='font-semibold text-slate-900 dark:text-slate-200'>
                    ${ total}
                  </span>
                </div>
                <div className='flex justify-between py-4'>
                  <span>Shpping estimate</span>
                  <span className='font-semibold text-slate-900 dark:text-slate-200'>
                  5
                  </span>
                </div>
                <div className='flex justify-between py-4'>
                  <span>Tax estimate</span>
                  <span className='font-semibold text-slate-900 dark:text-slate-200'>
                    $24
                  </span>
                </div>
                <div className='flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4'>
                  <span>Order total</span>
                  <span>{total+5+24}</span>
                </div>
              </div>
              <ButtonPrimary href='/checkout' className='mt-8 w-full'>
                Checkout
              </ButtonPrimary>
              <div className='mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center'>
                <p className='block relative pl-5'>
                  <svg
                    className='w-4 h-4 absolute -left-1 top-0.5'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 8V13'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11.9945 16H12.0035'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  Learn more{` `}
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='##'
                    className='text-slate-900 dark:text-slate-200 underline font-medium'
                  >
                    Taxes
                  </a>
                  <span>
                    {` `}and{` `}
                  </span>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='##'
                    className='text-slate-900 dark:text-slate-200 underline font-medium'
                  >
                    Shipping
                  </a>
                  {` `} infomation
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
