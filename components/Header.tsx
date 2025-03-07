'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const products = [
  {
    name: '高铝质隔热砖',
    description:
      '可广泛应用于冶金、陶瓷、石油、化工等行业各种工业窑炉内衬不受溶液侵蚀)及保温层，是一种理想的节能产品。',
    img: '/img/products/gerezhuan.jpg',
    href: '#'
  },
  {
    name: '机制微孔莫来石砖',
    description:
      '新型微孔莫来石砖相比传统保温隔热砖，具有气孔率更高、孔径更小、导热性能更低、强度更高、重烧稳定的优点。同时还具有抗还原气氛、抗碱蒸汽的特点。',
    img: '/img/products/jizhimolaishizhuan.jpg',
    href: '#'
  },
  {
    name: '聚轻砖',
    description: '聚轻砖具有轻质、隔热、吸音和环保的特点，适用于各种建筑结构。',
    img: '/img/products/juqingzhuan.jpg',
    href: '#'
  },
  {
    name: '陶瓷蛭石保温板',
    description: '具备优异保温、防火、轻质、环保和耐久性能的建筑保温材料，常用于墙体和屋顶保温。',
    img: '/img/products/gerezhuan.jpg',
    href: '#'
  },
];
const callsToAction = [{ name: '联系我们', href: '/inquiry', icon: EnvelopeIcon }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='relative isolate z-10 bg-white'>
      <nav
        className='mx-auto flex max-w-screen-xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>瑞斯特耐</span>
            <Image className='h-8 w-auto outline-none' src='/img/logo.png' width="389" height="96" alt='瑞斯特耐' priority />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <a href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            首页
          </a>

          <Popover>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none'>
              产品中心
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel
                focus={true}
                className='absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5'
              >
                <div className='mx-auto grid max-w-screen-xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50'
                    >
                      <figure>
                        <Image className="w-auto h-11 rounded" src={item.img} width={600} height={394} alt={item.name} loading='lazy' />
                      </figure>
                      <a
                        href={item.href}
                        className='mt-6 block font-semibold text-gray-900 outline-none'
                      >
                        {item.name}
                        <span className='absolute inset-0' />
                      </a>
                      <p className='mt-1 text-gray-600'>{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className='bg-gray-50'>
                  <div className='mx-auto max-w-screen-xl'>
                    <div className='grid grid-cols-1 divide-x divide-gray-900/5 border-x border-gray-900/5'>
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                        >
                          <item.icon
                            className='h-5 w-5 flex-none text-gray-400'
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            解决方案
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            客户案例
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            服务支持
          </a> */}
          <a href='/inquiry' className='text-sm font-semibold leading-6 text-gray-900'>
            询单
          </a>
          <a
            href='/about'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            关于我们
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>瑞斯特耐</span>
              <Image className='h-8 w-auto outline-none' src='/img/logo.png' width="389" height="96" alt='瑞斯特耐' priority />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  首页
                </a>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        耐材产品
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/* <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  解决方案
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  客户案例
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  服务支持
                </a> */}
                <a
                  href='/inquiry'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  询单
                </a>
                <a
                  href='/about'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  关于我们
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
