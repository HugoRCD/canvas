<script setup lang="ts">
const { appName } = useAppConfig();
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 6,
  },
});
</script>

<template>
  <div id="main-logo">
    <NuxtLink to="/" class="flex flex-shrink-0 items-center" aria-label="Go back to home page">
      <svg id="hochard-logo" class="" :class="size ? 'h-' + size : 'h-6'" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 585.62 586.25">
        <g clip-path="url(#clip0_406_59)" filter="url(#filter0_b_406_59)">
          <path
            d="M330.9 128.3C323.42 118.48 314.74 109.73 304.09 101.25C319.58 91.2701 335.77 85.4501 352.9 83.0901C432.16 72.1901 495.88 99.73 542.79 163.84C606.92 251.47 598.95 385.86 507.52 466.24C433.91 530.95 310.31 516.62 258.59 435.14C244.47 412.9 230.38 390.74 218.4 367.29C211.47 353.73 204.32 340.32 195.78 327.68C187.43 315.31 178.45 303.42 167.99 292.05V245.22C177.11 248.74 183.89 254.85 190.55 260.96C210.42 279.17 225.45 301.12 238.68 324.37C256.39 355.5 273.87 386.63 295.23 415.62C342.18 479.33 440.04 489.35 500.39 418.71C564.36 343.84 560.43 227.29 489.67 161.6C444.07 119.27 390.91 109.14 330.89 128.3H330.9Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M256.11 448.74C264.77 459.97 273.78 469.69 284.08 479.64C264.56 492.92 243.48 499.91 221.34 504.04C142.68 518.71 84.8599 485.3 40.9199 423.4C-33.9701 317.9 0.349876 162.22 111.8 103.23C166.39 74.33 223.33 70.09 279.53 99.54C316.68 119.01 338.76 150.22 344.13 192.47C346.68 212.54 343.44 231.79 335.28 250.02C318.85 286.76 289.87 310.08 253.1 325.54C245.95 314.65 239.04 304.12 232.06 293.51C234.09 290.25 237.94 290.22 241 288.89C261.17 280.15 278.74 268.08 291.52 249.85C317.87 212.22 307.27 161.35 268.41 136.79C241.79 119.97 212.75 116.7 182.42 120.33C110.09 128.99 53.0699 190.35 42.5799 265.87C34.0199 327.5 50.4199 382.37 94.2399 427.44C137.11 471.53 196.89 480.06 251.24 451.12C252.6 450.39 254.02 449.76 256.1 448.74H256.11Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M448.1 80.22C431.91 77.15 416.43 71.27 400.24 71.32C345.83 17.61 241.94 17.27 186.85 71.13C170.72 71.68 155.02 76.62 138.94 81.09C155.44 41.42 225.84 2.56003 283.13 1.09003C351.65 -0.669974 407.73 23.33 448.1 80.22Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M144.9 514.14C159.79 516.29 174.47 518.31 189.02 517.5C243.3 567.42 341.87 568.64 397.65 517.57C412.21 518.22 426.91 516.27 441.85 514.1C404.82 561.8 355.32 584.6 295.87 585.24C234.54 585.9 183.36 563.23 144.91 514.14H144.9Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M418.2 244.37V292.52C377.9 332.88 362.34 388.47 328.23 433.09C316.93 424.72 308.56 414.57 299.94 403.24C330.19 362.53 347.67 313.77 381.52 275.29C391.97 263.4 403.38 252.69 418.19 244.37H418.2Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M430.04 286.65V138.55C443.98 142.37 455.92 148.83 466.72 158.36C466.72 191.69 466.73 224.99 466.71 258.3C466.71 262.98 464.54 266.81 461.62 270.3C454.61 278.67 440.61 286.06 430.04 286.65Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M120.32 158.23C130.9 148.62 142.88 142.7 156.55 138.48V286.73C135.15 285.2 120.32 269.74 120.32 249.47C120.32 219.02 120.32 188.56 120.32 158.24V158.23Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M395.77 340.4C404.51 324.36 413.94 311.83 424.58 300.14C426.88 297.61 430.3 297.59 433.25 296.66C449.72 291.46 463.41 282 474.54 269.02C484.93 256.9 484.85 248.48 475.38 236.19C496.43 235.34 514.55 260.99 507.97 282.3C506.36 287.52 503.91 292.36 500.32 296.4C473.1 326.96 438.32 339.74 395.77 340.4Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M112.21 235.52C102.18 248.13 101.82 256.09 111.72 268.25C122.52 281.53 136.15 291.57 152.4 296.92C160.53 299.59 166.2 304.14 170.93 310.68C177.38 319.6 184.31 328.22 188.94 339.22C179.86 341.37 171.54 339.88 163.27 338.43C136.69 333.77 113.32 322.49 93.47 304.12C88.55 299.57 84.37 294.37 81.34 288.36C69.93 265.72 85.52 238.13 112.21 235.52Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M259.75 144.04C271.27 150.44 280.08 159.51 287.05 171.07C277.76 193.61 277.33 216.05 287.55 238.61C280.89 250.37 271.52 259.54 260.72 267.46C235.59 235.42 235.1 174.79 259.75 144.04Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M430.11 346.75C442.33 343.3 454.01 338.73 466.26 333.25V433.12C456.22 441.32 444.45 447.53 430.11 450.72V346.76V346.75Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M156.5 450.7C142.44 447.48 131.19 441.42 120.66 433.27V333.41C132.6 338.25 143.93 343.43 156.5 346.55V450.69V450.7Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M327.63 280.66C336.59 284.7 344.55 288.29 353.33 292.26C346.67 303.19 340.17 313.83 333.35 325.02C321.83 321.35 311.6 315.52 300.86 308.49C310.64 299.77 319.81 291.21 327.64 280.66H327.63Z"
            fill="#EE49FD"
            fill-opacity="0.05"
            stroke="#5A069B"
            stroke-opacity="0.28"
            stroke-width="2"
            stroke-miterlimit="10"
          />
        </g>
        <defs>
          <filter id="filter0_b_406_59" x="-25" y="-25" width="635.62" height="636.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_406_59" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_406_59" result="shape" />
          </filter>
          <clipPath id="clip0_406_59">
            <rect width="585.62" height="586.25" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span class="text-xs font-semibold ml-1" v-if="isText">{{ appName }}</span>
    </NuxtLink>
  </div>
</template>
