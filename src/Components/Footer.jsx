import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary text-white mt-10 md:px-20 px-5 py-10">
      <div className="flex md:flex-row flex-col items-center md:items-start gap-5 md:gap-0 md:justify-between border-b-white border-b-2 pb-5">
        <div className="flex flex-col items-center md:block">
          <Link to="/">
            <svg
              width="164"
              height="44"
              viewBox="0 0 164 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_758_2335)">
                <path
                  d="M60.7001 23.4585C60.7001 25.7495 59.7263 27.6136 57.7788 29.0507C55.842 30.4773 53.2073 31.1907 49.8748 31.1907C47.9482 31.1907 46.2664 31.0241 44.8292 30.6908C43.4028 30.3472 42.0646 29.915 40.815 29.3943V23.8178H41.471C42.7105 24.8071 44.0951 25.5673 45.6262 26.0984C47.1675 26.6295 48.6461 26.8951 50.0623 26.8951C50.4266 26.8951 50.9058 26.8638 51.4994 26.8013C52.0931 26.7388 52.5774 26.6347 52.9519 26.4889C53.4102 26.3015 53.7852 26.0672 54.0769 25.786C54.3788 25.5048 54.5296 25.0883 54.5296 24.5364C54.5296 24.0261 54.3109 23.5887 53.8736 23.2242C53.4469 22.8493 52.8166 22.563 51.9837 22.3651C51.1091 22.1568 50.1819 21.9642 49.203 21.7871C48.2348 21.5997 47.3234 21.3654 46.4697 21.0842C44.5119 20.449 43.1008 19.5898 42.2365 18.5068C41.3825 17.4134 40.9556 16.0596 40.9556 14.4455C40.9556 12.2795 41.9241 10.5144 43.861 9.15017C45.8085 7.77556 48.3074 7.08826 51.3589 7.08826C52.8896 7.08826 54.3998 7.23927 55.8886 7.54126C57.3885 7.83283 58.6847 8.20252 59.7784 8.65031V14.0081H59.1378C58.2008 13.2584 57.0498 12.6335 55.6857 12.1337C54.3318 11.6234 52.9468 11.3683 51.5306 11.3683C51.0309 11.3683 50.5308 11.4047 50.0311 11.4776C49.5417 11.5401 49.0676 11.6651 48.6098 11.8525C48.2036 12.0087 47.8547 12.2482 47.563 12.5711C47.2713 12.8835 47.1257 13.2427 47.1257 13.6489C47.1257 14.2633 47.3601 14.7371 47.8286 15.0703C48.2972 15.3931 49.1825 15.6899 50.4843 15.9607C51.338 16.1377 52.1554 16.3095 52.9366 16.4762C53.728 16.6428 54.5766 16.8719 55.4828 17.1635C57.2633 17.7466 58.5753 18.5433 59.4188 19.5534C60.273 20.5531 60.7001 21.8548 60.7001 23.4585Z"
                  fill="#ffffff"
                />
                <path
                  d="M86.3174 30.7689H80.1161L78.5073 26.0672H69.8845L68.2757 30.7689H62.2307L70.8219 7.51001H77.7261L86.3174 30.7689ZM77.0543 21.8028L74.1959 13.4614L71.3374 21.8028H77.0543Z"
                  fill="#ffffff"
                />
                <path
                  d="M108.28 23.4585C108.28 25.7495 107.306 27.6136 105.359 29.0507C103.422 30.4773 100.787 31.1907 97.4549 31.1907C95.5283 31.1907 93.8464 31.0241 92.4093 30.6908C90.9828 30.3472 89.6448 29.915 88.3951 29.3943V23.8178H89.0511C90.2901 24.8071 91.6751 25.5673 93.2062 26.0984C94.7472 26.6295 96.2261 26.8951 97.6424 26.8951C98.0067 26.8951 98.4858 26.8638 99.0795 26.8013C99.6731 26.7388 100.157 26.6347 100.532 26.4889C100.99 26.3015 101.365 26.0672 101.657 25.786C101.959 25.5048 102.11 25.0883 102.11 24.5364C102.11 24.0261 101.891 23.5887 101.454 23.2242C101.027 22.8493 100.397 22.563 99.5638 22.3651C98.6887 22.1568 97.7619 21.9642 96.7831 21.7871C95.8149 21.5997 94.9035 21.3654 94.0497 21.0842C92.092 20.449 90.6809 19.5898 89.8165 18.5068C88.9627 17.4134 88.5356 16.0596 88.5356 14.4455C88.5356 12.2795 89.5039 10.5144 91.4411 9.15017C93.3882 7.77556 95.8875 7.08826 98.939 7.08826C100.47 7.08826 101.98 7.23927 103.469 7.54126C104.969 7.83283 106.265 8.20252 107.358 8.65031V14.0081H106.718C105.78 13.2584 104.63 12.6335 103.266 12.1337C101.912 11.6234 100.527 11.3683 99.1107 11.3683C98.611 11.3683 98.1109 11.4047 97.6112 11.4776C97.1217 11.5401 96.6477 11.6651 96.1894 11.8525C95.7837 12.0087 95.4348 12.2482 95.1431 12.5711C94.8514 12.8835 94.7057 13.2427 94.7057 13.6489C94.7057 14.2633 94.9402 14.7371 95.4087 15.0703C95.8772 15.3931 96.7626 15.6899 98.0639 15.9607C98.9181 16.1377 99.7355 16.3095 100.517 16.4762C101.308 16.6428 102.157 16.8719 103.062 17.1635C104.843 17.7466 106.155 18.5433 106.999 19.5534C107.853 20.5531 108.28 21.8548 108.28 23.4585Z"
                  fill="#ffffff"
                />
                <path
                  d="M135.022 19.1473C135.022 22.8545 133.96 25.8016 131.835 27.9885C129.711 30.1649 126.775 31.2531 123.026 31.2531C119.287 31.2531 116.356 30.1649 114.231 27.9885C112.107 25.8016 111.045 22.8545 111.045 19.1473C111.045 15.4088 112.107 12.4565 114.231 10.2904C116.356 8.11397 119.287 7.02576 123.026 7.02576C126.754 7.02576 129.685 8.11397 131.82 10.2904C133.955 12.4565 135.022 15.4088 135.022 19.1473ZM127.071 25.0362C127.654 24.3281 128.087 23.4949 128.368 22.5369C128.649 21.5685 128.79 20.4334 128.79 19.1316C128.79 17.7362 128.628 16.549 128.305 15.5702C127.982 14.5913 127.561 13.7999 127.04 13.1959C126.509 12.571 125.895 12.118 125.197 11.8369C124.51 11.5557 123.791 11.4151 123.041 11.4151C122.281 11.4151 121.562 11.5505 120.886 11.8213C120.219 12.092 119.605 12.5398 119.042 13.1646C118.522 13.7478 118.095 14.5549 117.761 15.5858C117.439 16.6063 117.277 17.7935 117.277 19.1473C117.277 20.5323 117.433 21.7142 117.746 22.6931C118.069 23.6616 118.49 24.453 119.011 25.0674C119.532 25.6818 120.141 26.1348 120.839 26.4264C121.536 26.718 122.271 26.8638 123.041 26.8638C123.812 26.8638 124.546 26.718 125.244 26.4264C125.941 26.1244 126.551 25.661 127.071 25.0362Z"
                  fill="#ffffff"
                />
                <path
                  d="M163.998 30.7689H158.031V15.1953L153.72 25.3017H149.58L145.269 15.1953V30.7689H139.614V7.51001H146.581L151.814 19.1785L157.031 7.51001H163.998V30.7689Z"
                  fill="#ffffff"
                />
                <path
                  d="M60.0564 43.8285H57.9014L57.3423 42.1947H54.3463L53.7873 43.8285H51.6869L54.6722 35.7468H57.0711L60.0564 43.8285ZM56.8379 40.713L55.8445 37.8147L54.8512 40.713H56.8379Z"
                  fill="#ffffff"
                />
                <path
                  d="M70.3172 43.9857C69.7163 43.9857 69.161 43.8973 68.6507 43.7196C68.1442 43.5424 67.7081 43.2785 67.3429 42.9274C66.9774 42.5765 66.6934 42.1386 66.4905 41.614C66.2915 41.0893 66.192 40.4833 66.192 39.7958C66.192 39.1553 66.2881 38.5746 66.4798 38.0535C66.6716 37.5325 66.95 37.0856 67.3156 36.713C67.6667 36.3547 68.101 36.0779 68.6182 35.8825C69.1393 35.6872 69.7073 35.5895 70.3227 35.5895C70.6627 35.5895 70.9685 35.6094 71.2397 35.6492C71.5147 35.6854 71.768 35.7342 71.9994 35.7957C72.242 35.8645 72.4611 35.9423 72.6563 36.0291C72.8553 36.1123 73.0291 36.1901 73.1773 36.2625V38.2218H72.9386C72.8374 38.135 72.7088 38.0318 72.5534 37.9124C72.4013 37.793 72.2275 37.6754 72.0323 37.5597C71.8333 37.4439 71.6181 37.3462 71.3861 37.2665C71.1547 37.187 70.907 37.1472 70.6426 37.1472C70.3496 37.1472 70.0712 37.1942 69.8068 37.2883C69.5429 37.3787 69.2986 37.5307 69.0743 37.7442C68.8608 37.9504 68.687 38.2236 68.5533 38.5637C68.423 38.9039 68.3577 39.3163 68.3577 39.8012C68.3577 40.3078 68.4282 40.7311 68.5695 41.0712C68.7143 41.4114 68.895 41.6791 69.1124 41.8745C69.3327 42.0735 69.5787 42.2164 69.8504 42.3033C70.1216 42.3865 70.3893 42.4281 70.6537 42.4281C70.907 42.4281 71.1564 42.3901 71.4024 42.3141C71.6522 42.2381 71.882 42.135 72.0917 42.0048C72.2694 41.8998 72.4338 41.7877 72.5858 41.6683C72.7379 41.5489 72.8626 41.4457 72.9604 41.3589H73.1773V43.2913C72.9749 43.3814 72.781 43.4664 72.5965 43.5463C72.412 43.6257 72.2185 43.6945 72.0157 43.7525C71.7517 43.8286 71.504 43.8862 71.2721 43.9259C71.0406 43.9661 70.7225 43.9857 70.3172 43.9857Z"
                  fill="#ffffff"
                />
                <path
                  d="M87.6225 43.8285H85.4679L84.9089 42.1947H81.9129L81.3538 43.8285H79.2534L82.2387 35.7468H84.6377L87.6225 43.8285ZM84.404 40.713L83.4111 37.8147L82.4177 40.713H84.404Z"
                  fill="#ffffff"
                />
                <path
                  d="M101.867 39.7957C101.867 40.5484 101.695 41.2232 101.352 41.8202C101.008 42.4136 100.574 42.8697 100.049 43.1879C99.6548 43.4266 99.2221 43.5932 98.7519 43.6872C98.2817 43.7815 97.7243 43.8285 97.0803 43.8285H94.2308V35.7468H97.1615C97.82 35.7468 98.3885 35.8029 98.8659 35.9151C99.3434 36.0236 99.7453 36.1792 100.071 36.3819C100.628 36.722 101.066 37.1815 101.384 37.7604C101.706 38.3358 101.867 39.0142 101.867 39.7957ZM99.7124 39.7795C99.7124 39.2476 99.615 38.7935 99.4194 38.4172C99.2277 38.0372 98.9219 37.7405 98.5021 37.527C98.289 37.4221 98.0699 37.3516 97.8456 37.3154C97.6248 37.2756 97.29 37.2557 96.8416 37.2557H96.315V42.3141H96.8416C97.337 42.3141 97.7009 42.2924 97.9323 42.249C98.1638 42.2019 98.3902 42.1187 98.611 41.9993C98.9906 41.7822 99.2691 41.4928 99.4468 41.1309C99.624 40.7654 99.7124 40.315 99.7124 39.7795Z"
                  fill="#ffffff"
                />
                <path
                  d="M114.75 43.8285H108.904V35.7468H114.75V37.31H110.978V38.7048H114.478V40.2679H110.978V42.2653H114.75V43.8285Z"
                  fill="#ffffff"
                />
                <path
                  d="M130.421 43.8285H128.348V38.4172L126.85 41.9288H125.412L123.914 38.4172V43.8285H121.949V35.7468H124.37L126.188 39.8012L128.001 35.7468H130.421V43.8285Z"
                  fill="#ffffff"
                />
                <path
                  d="M145.046 35.7468L142.066 40.7021V43.8285H139.982V40.7998L136.954 35.7468H139.32L141.068 38.8731L142.756 35.7468H145.046Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.4664 18.874L24.6165 18.9076H24.6177C24.6768 18.9207 24.7325 18.9343 24.7924 18.9474C46.2407 33.4807 20.6284 44.5285 7.87659 43.4617L8.76629 38.6159C16.936 42.1633 36.0026 30.6541 20.9667 23.5886L20.9634 23.587H20.9626L20.9617 23.5865L20.9609 23.5862L20.9593 23.5853C20.9453 23.5783 20.9322 23.5718 20.9179 23.5648L20.9146 23.5632L20.9134 23.5628L20.9125 23.5624L20.9113 23.5616H20.9105L20.9101 23.5611L20.9093 23.5607L20.9081 23.5603L20.9068 23.5599L20.9052 23.5591L20.904 23.5587L20.9031 23.5583L20.9015 23.5578L20.9011 23.5575L20.8994 23.5566L20.8982 23.5562L20.8974 23.5558L20.8966 23.5554L20.8958 23.555L20.8945 23.5546L20.8937 23.5542L20.89 23.5529L20.8892 23.5525L20.8867 23.5513L20.8851 23.5509L20.8843 23.5505L20.883 23.5501L20.8822 23.5496L20.881 23.5488L20.8794 23.548L20.8781 23.5476L20.8773 23.5472L20.8761 23.5464L20.8748 23.546L20.874 23.5455L20.8732 23.5452L20.8724 23.5447L20.8712 23.5439L20.8703 23.5435L20.8687 23.5431L20.8679 23.5427L20.8666 23.5423L20.8658 23.5419L20.865 23.5411L20.8638 23.5406L20.863 23.5402L20.8617 23.5398L20.8609 23.5394L20.8597 23.5386L20.8572 23.5378L20.8564 23.5373L20.8556 23.537L20.8543 23.5365L20.8535 23.5361L20.851 23.5353L20.8498 23.5349L20.8482 23.5341C20.8166 23.5288 20.7879 23.523 20.7567 23.5181L24.4677 18.8777L24.4664 18.874Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.18128 43.2216C-11.6066 41.6499 13.3698 10.4419 5.14807 29.2904C3.87258 34.4134 5.38262 37.2088 8.07098 38.3761L7.18128 43.2216Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.9219 2.28421C24.9367 3.41745 9.9365 8.37232 12.3707 12.847C15.2489 7.92747 24.2053 6.54944 34.7903 3.90576L35.3791 6.18946C26.8941 7.05989 16.4494 9.14884 13.6412 14.232C15.3444 15.5473 18.5494 16.9163 23.733 18.3009L19.9101 22.824C19.8696 22.8027 19.8339 22.7813 19.7929 22.7604C-16.4454 15.3275 19.2623 -7.17488 34.9219 2.28421Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3353 25.384L21.4013 25.393C21.4276 25.3967 21.4522 25.4004 21.4784 25.4041C31.2315 30.9444 19.9397 38.1342 14.3784 38.1235L14.7626 36.3109C18.4153 37.5594 26.7047 30.0818 19.9651 27.5517H19.9618C19.9557 27.5492 19.9491 27.5468 19.9429 27.5443L19.9413 27.5435H19.938L19.9376 27.5431H19.9352L19.9347 27.5427H19.9331L19.9327 27.5423H19.9302L19.9298 27.5419H19.929L19.9282 27.5414H19.9257L19.9253 27.541H19.9229L19.9224 27.5406L19.9216 27.5402H19.9151C19.9011 27.539 19.8884 27.5378 19.8749 27.5365L21.3382 25.3935L21.3353 25.384Z"
                  fill="#ffffff"
                />
              </g>
              <defs>
                <clipPath id="clip0_758_2335">
                  <rect width="164" height="43.9896" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
          </Link>
          <p className="mt-4 max-w-[300px] text-center md:text-left">
            At Sasom Academy, you have the chance to acquire sought-after skills
            for constructing your career in technology.
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-3">Usefull Links</h2>
          <div className="list-none text-sm flex flex-col gap-3">
            <Link to="about">
              <li className="hover:cursor-pointer">About Us</li>
            </Link>

            <Link to="contact">
              <li className="hover:cursor-pointer">Contact Us</li>
            </Link>
            <li className="hover:cursor-pointer">Blog</li>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-3">What We Offer</h2>
          <div className="list-none text-sm flex flex-col gap-3">
            <li className="hover:cursor-pointer">Learn Now</li>
            <li className="hover:cursor-pointer">Talent Outsourcing</li>
          </div>
        </div>
        <div>
          <div className="flex gap-3 mb-5">
            <a href="https://www.facebook.com" target="_blank">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.61004 9.26917H11.318L12.0012 6.53636H9.61004V5.16996C9.61004 4.46626 9.61004 3.80356 10.9764 3.80356H12.0012V1.508C11.7785 1.47862 10.9375 1.41235 10.0493 1.41235C8.19445 1.41235 6.87724 2.54442 6.87724 4.6234V6.53636H4.82764V9.26917H6.87724V15.0764H9.61004V9.26917Z"
                    fill="#009EC5"
                  />
                </svg>
              </div>
            </a>
            <a href="https://www.instagram.com/sasom.academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.26496 6.80981C7.67609 6.80981 7.11134 7.04374 6.69494 7.46014C6.27855 7.87653 6.04462 8.44129 6.04462 9.03016C6.04462 9.61903 6.27855 10.1838 6.69494 10.6002C7.11134 11.0166 7.67609 11.2505 8.26496 11.2505C8.85383 11.2505 9.41859 11.0166 9.83498 10.6002C10.2514 10.1838 10.4853 9.61903 10.4853 9.03016C10.4853 8.44129 10.2514 7.87653 9.83498 7.46014C9.41859 7.04374 8.85383 6.80981 8.26496 6.80981Z"
                    fill="#009EC5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.6919 2.93766C7.06666 2.67443 9.46323 2.67443 11.838 2.93766C13.1354 3.08249 14.1813 4.10385 14.3337 5.406C14.6153 7.81398 14.6153 10.2466 14.3337 12.6546C14.1813 13.9567 13.1354 14.9781 11.8387 15.1236C9.46369 15.3869 7.06688 15.3869 4.6919 15.1236C3.39453 14.9781 2.34858 13.9567 2.19623 12.6553C1.91457 10.247 1.91457 7.81421 2.19623 5.406C2.34858 4.10385 3.39453 3.08249 4.6919 2.93766ZM11.6809 4.93119C11.4997 4.93119 11.3259 5.00316 11.1978 5.13129C11.0697 5.25941 10.9977 5.43318 10.9977 5.61437C10.9977 5.79556 11.0697 5.96933 11.1978 6.09745C11.3259 6.22557 11.4997 6.29755 11.6809 6.29755C11.8621 6.29755 12.0358 6.22557 12.1639 6.09745C12.2921 5.96933 12.364 5.79556 12.364 5.61437C12.364 5.43318 12.2921 5.25941 12.1639 5.13129C12.0358 5.00316 11.8621 4.93119 11.6809 4.93119ZM5.01982 9.03029C5.01982 8.16963 5.36172 7.34422 5.9703 6.73564C6.57888 6.12706 7.40429 5.78516 8.26495 5.78516C9.12561 5.78516 9.95101 6.12706 10.5596 6.73564C11.1682 7.34422 11.5101 8.16963 11.5101 9.03029C11.5101 9.89094 11.1682 10.7164 10.5596 11.3249C9.95101 11.9335 9.12561 12.2754 8.26495 12.2754C7.40429 12.2754 6.57888 11.9335 5.9703 11.3249C5.36172 10.7164 5.01982 9.89094 5.01982 9.03029Z"
                    fill="#009EC5"
                  />
                </svg>
              </div>
            </a>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_828_431)">
                  <path
                    d="M10.8749 0.787842H1.12494C0.506189 0.787842 -6.10352e-05 1.29409 -6.10352e-05 1.91284V11.6628C-6.10352e-05 12.2816 0.506189 12.7878 1.12494 12.7878H10.8749C11.4937 12.7878 11.9999 12.2816 11.9999 11.6628V1.91284C11.9999 1.29409 11.4937 0.787842 10.8749 0.787842ZM4.49994 10.5378H2.99994V5.28784H4.49994V10.5378ZM3.74994 4.53784C3.55103 4.53784 3.36026 4.45882 3.21961 4.31817C3.07896 4.17752 2.99994 3.98675 2.99994 3.78784C2.99994 3.58893 3.07896 3.39816 3.21961 3.25751C3.36026 3.11686 3.55103 3.03784 3.74994 3.03784C3.94885 3.03784 4.13962 3.11686 4.28027 3.25751C4.42092 3.39816 4.49994 3.58893 4.49994 3.78784C4.49994 3.98675 4.42092 4.17752 4.28027 4.31817C4.13962 4.45882 3.94885 4.53784 3.74994 4.53784ZM9.74994 10.5378H8.24994V7.53784C8.24994 7.33893 8.17092 7.14816 8.03027 7.00751C7.88962 6.86686 7.69885 6.78784 7.49994 6.78784C7.30103 6.78784 7.11026 6.86686 6.96961 7.00751C6.82896 7.14816 6.74994 7.33893 6.74994 7.53784V10.5378H5.24994V5.28784H6.74994V6.21859C7.05894 5.79409 7.53294 5.28784 8.06244 5.28784C8.99544 5.28784 9.74994 6.12709 9.74994 7.16284V10.5378Z"
                    fill="#009EC5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_828_431">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(-6.10352e-05 0.787842)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9157 3.68725C13.007 3.26367 12.0232 2.95623 10.9984 2.7786C10.9894 2.77831 10.9805 2.77999 10.9722 2.78354C10.9639 2.78708 10.9566 2.79239 10.9506 2.79909C10.8276 3.02455 10.6841 3.31832 10.5885 3.54378C9.50149 3.37981 8.39608 3.37981 7.3091 3.54378C7.21345 3.31149 7.06998 3.02455 6.94017 2.79909C6.93334 2.78543 6.91285 2.7786 6.89235 2.7786C5.86755 2.95623 4.89057 3.26367 3.97508 3.68725C3.96825 3.68725 3.96142 3.69409 3.95459 3.70092C2.09628 6.48155 1.58388 9.18702 1.83666 11.8652C1.83666 11.8788 1.84349 11.8925 1.85716 11.8993C3.08692 12.8012 4.26886 13.3477 5.43713 13.7098C5.45763 13.7166 5.47812 13.7098 5.48496 13.6961C5.75824 13.3204 6.00419 12.9241 6.21598 12.5074C6.22964 12.4801 6.21598 12.4527 6.18865 12.4459C5.79923 12.2956 5.4303 12.118 5.0682 11.913C5.04087 11.8993 5.04087 11.8583 5.06137 11.8378C5.13652 11.7832 5.21167 11.7217 5.28683 11.667C5.30049 11.6534 5.32099 11.6534 5.33465 11.6602C7.68486 12.7328 10.2195 12.7328 12.5424 11.6602C12.5561 11.6534 12.5766 11.6534 12.5902 11.667C12.6654 11.7285 12.7405 11.7832 12.8157 11.8447C12.843 11.8652 12.843 11.9062 12.8089 11.9198C12.4536 12.1316 12.0778 12.3024 11.6884 12.4527C11.6611 12.4596 11.6543 12.4937 11.6611 12.5142C11.8797 12.931 12.1257 13.3272 12.3921 13.703C12.4126 13.7098 12.4331 13.7166 12.4536 13.7098C13.6287 13.3477 14.8106 12.8012 16.0404 11.8993C16.0541 11.8925 16.0609 11.8788 16.0609 11.8652C16.3615 8.77027 15.5622 6.08529 13.943 3.70092C13.9362 3.69409 13.9293 3.68725 13.9157 3.68725ZM6.57125 10.2323C5.86755 10.2323 5.28 9.58328 5.28 8.78393C5.28 7.98459 5.85388 7.33555 6.57125 7.33555C7.29544 7.33555 7.86933 7.99142 7.86249 8.78393C7.86249 9.58328 7.28861 10.2323 6.57125 10.2323ZM11.3332 10.2323C10.6295 10.2323 10.0419 9.58328 10.0419 8.78393C10.0419 7.98459 10.6158 7.33555 11.3332 7.33555C12.0573 7.33555 12.6312 7.99142 12.6244 8.78393C12.6244 9.58328 12.0573 10.2323 11.3332 10.2323Z"
                  fill="#009EC5"
                />
              </svg>
            </div>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_828_441)">
                  <path
                    d="M12.9157 1.57568H15.4304L9.93637 7.85552L16.4 16.3992H11.3392L7.37592 11.2168L2.83995 16.3992H0.323915L6.20058 9.68207L1.52588e-05 1.57637H5.18925L8.77197 6.31323L12.9157 1.57568ZM12.0335 14.8945H13.4268L4.43212 3.0018H2.93698L12.0335 14.8945Z"
                    fill="#009EC5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_828_441">
                    <rect
                      width="16.4"
                      height="16.4"
                      fill="white"
                      transform="translate(1.52588e-05 0.787842)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="text-center text-sm md:text-right ">
            <p>
              41, Idiroko Road, Besides Domino&apos;s Pizza,
              <br /> Sango Ota.
            </p>
            <p>enquiry@sasom.com</p>
          </div>
        </div>
      </div>
      <div className="mt-7 flex gap-5 md:gap-0 items-center md:justify-between md:flex-row flex-col-reverse">
        <p>copyright 2024 Sasom</p>
        <div className="flex gap-2 md:gap-5 items-center flex-col md:flex-row">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
