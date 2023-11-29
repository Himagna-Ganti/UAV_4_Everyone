import React from "react";
import Typed from "react-typed";
import "./Title.css";
function Title() {
  return (
    <div className="text-charcoal  h-[500px] container flex flex-col items-center  ">
      <div className="pt-[100px] text-7xl   font-work font-bold ">
        <Typed
          className="ml-[230px] "
          strings={["UAV 4 EVERYONE"]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
      </div>
      <div class="svg-container">
        <svg
          class="svg-content"
          viewBox="0 0 888 553"
          preserveAspectRatio="xMinYMin meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#ffffff" />
          <g id="undraw_drone_surveillance_kjjg 1">
            <g id="pro-camara">
              <path
                id="Vector"
                d="M412.408 497.539C411.02 497.541 409.69 498.093 408.709 499.074C407.728 500.054 407.177 501.384 407.175 502.772V544.689C407.176 546.076 407.728 547.406 408.709 548.387C409.69 549.368 411.02 549.92 412.408 549.922H475.739C477.127 549.92 478.457 549.368 479.438 548.387C480.418 547.406 480.97 546.076 480.972 544.689V502.772C480.97 501.384 480.418 500.055 479.437 499.074C478.456 498.093 477.126 497.541 475.739 497.539H412.408Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_2"
                d="M444.073 544.406C455.493 544.406 464.75 535.149 464.75 523.73C464.75 512.311 455.493 503.054 444.073 503.054C432.654 503.054 423.397 512.311 423.397 523.73C423.397 535.149 432.654 544.406 444.073 544.406Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_3"
                d="M444.073 535.545C450.599 535.545 455.888 530.255 455.888 523.73C455.888 517.205 450.599 511.915 444.073 511.915C437.548 511.915 432.258 517.205 432.258 523.73C432.258 530.255 437.548 535.545 444.073 535.545Z"
                fill="#000000"
              />
              <path
                id="Vector_4"
                d="M451.215 514.334C452.948 516.605 453.798 519.428 453.607 522.279C453.417 525.129 452.198 527.814 450.178 529.834C448.157 531.855 445.473 533.073 442.622 533.264C439.772 533.455 436.949 532.605 434.677 530.872C435.696 532.216 436.99 533.325 438.474 534.127C439.957 534.928 441.595 535.402 443.278 535.518C444.96 535.633 446.647 535.386 448.226 534.795C449.805 534.203 451.239 533.28 452.431 532.088C453.623 530.895 454.546 529.462 455.138 527.883C455.73 526.304 455.976 524.616 455.861 522.934C455.746 521.252 455.271 519.614 454.47 518.13C453.669 516.647 452.559 515.352 451.215 514.334V514.334Z"
                fill="#000000"
              />
            </g>
            <g id="rotor-derecho">
              <path
                id="Vector_5"
                d="M664.127 265.647L463.273 250.14L623.513 277.462L661.912 270.816L664.127 265.647Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_6"
                d="M624.99 275.031L663.389 268.385L663.766 267.505L665.604 267.647L663.389 272.816L624.99 279.462L464.75 250.14L512.237 255.806L624.99 275.031Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_7"
                d="M681.85 265.647L882.704 250.14L722.464 277.462L684.065 270.816L681.85 265.647Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_8"
                d="M723.941 275.031L685.542 268.385L685.165 267.505L683.327 267.647L685.542 272.816L723.941 279.462L884.181 250.14L836.694 255.806L723.941 275.031Z"
                fill="#6C63FF"
              />
            </g>
            <g id="rotor-izquierdo">
              <path
                id="Vector_9"
                d="M209.251 265.647L8.396 250.14L168.637 277.462L207.036 270.816L209.251 265.647Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_10"
                d="M166.422 275.031L204.82 268.385L205.198 267.505L207.036 267.647L204.82 272.816L166.422 279.462L6.18103 250.14L53.668 255.806L166.422 275.031Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_11"
                d="M226.973 265.647L427.828 250.14L267.587 277.462L229.189 270.816L226.973 265.647Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_12"
                d="M269.803 275.031L231.404 268.385L231.027 267.505L229.189 267.647L231.404 272.816L269.803 279.462L430.043 250.14L382.556 255.806L269.803 275.031Z"
                fill="#6C63FF"
              />
            </g>
            <g id="chasis-drone">
              <path
                id="Vector_13"
                d="M243.479 325.817C243.794 324.931 243.956 323.999 243.957 323.059V287.986C243.957 285.782 243.082 283.669 241.524 282.111C239.966 280.553 237.852 279.677 235.649 279.677H232.275C235.045 276.882 236.926 273.329 237.68 269.466C238.434 265.604 238.029 261.604 236.515 257.972C235 254.339 232.445 251.236 229.17 249.054C225.895 246.871 222.048 245.706 218.112 245.706C214.177 245.706 210.329 246.871 207.054 249.054C203.78 251.236 201.224 254.339 199.71 257.972C198.195 261.604 197.79 265.604 198.544 269.466C199.299 273.329 201.179 276.882 203.949 279.677H200.576C199.485 279.677 198.404 279.892 197.396 280.31C196.388 280.727 195.472 281.339 194.701 282.111C193.929 282.882 193.317 283.798 192.899 284.806C192.482 285.814 192.267 286.895 192.267 287.986V323.059C192.266 324.495 192.64 325.906 193.352 327.154C190.844 327.594 188.336 328.071 185.828 328.623C184.301 328.964 182.935 329.817 181.958 331.039C180.98 332.262 180.449 333.781 180.452 335.347V343.68C180.452 345.506 181.177 347.258 182.469 348.55C183.761 349.841 185.512 350.567 187.339 350.567H265.372V329.891C258.167 328.076 250.855 326.715 243.479 325.817V325.817Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_14"
                d="M705.272 328.623C702.765 328.071 700.257 327.594 697.749 327.154C698.46 325.906 698.834 324.495 698.834 323.059V287.986C698.834 286.895 698.619 285.814 698.201 284.806C697.784 283.798 697.172 282.882 696.4 282.111C695.629 281.339 694.713 280.727 693.705 280.31C692.697 279.892 691.616 279.677 690.525 279.677H687.151C689.921 276.882 691.802 273.329 692.556 269.466C693.311 265.604 692.905 261.604 691.391 257.972C689.877 254.339 687.321 251.236 684.046 249.054C680.771 246.871 676.924 245.706 672.989 245.706C669.053 245.706 665.205 246.871 661.931 249.054C658.656 251.236 656.1 254.339 654.586 257.972C653.072 261.604 652.666 265.604 653.421 269.466C654.175 273.329 656.056 276.882 658.826 279.677H655.452C654.361 279.677 653.281 279.892 652.272 280.31C651.264 280.727 650.348 281.339 649.577 282.111C648.805 282.882 648.193 283.798 647.776 284.806C647.358 285.814 647.143 286.895 647.143 287.986V323.059C647.145 323.999 647.307 324.931 647.622 325.817C640.246 326.715 632.934 328.076 625.729 329.891V350.567H703.761C705.588 350.567 707.34 349.841 708.631 348.55C709.923 347.258 710.649 345.506 710.649 343.68V335.347C710.652 333.781 710.12 332.262 709.143 331.039C708.165 329.817 706.8 328.964 705.272 328.623V328.623Z"
                fill="#3F3D56"
              />
              <g id="Group 1">
                <path
                  id="Vector_15"
                  d="M323.902 388.25C322.878 388.251 321.896 388.659 321.172 389.383C320.448 390.107 320.041 391.089 320.04 392.113V546.428C320.041 547.452 320.448 548.434 321.172 549.158C321.896 549.882 322.878 550.29 323.902 550.291H350.098C351.122 550.29 352.104 549.882 352.828 549.158C353.552 548.434 353.96 547.452 353.961 546.428V392.113C353.96 391.089 353.552 390.107 352.828 389.383C352.104 388.659 351.122 388.251 350.098 388.25H323.902Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_16"
                  d="M541.741 388.25C540.717 388.251 539.735 388.659 539.011 389.383C538.287 390.107 537.879 391.089 537.878 392.113V546.428C537.879 547.452 538.287 548.434 539.011 549.158C539.735 549.882 540.717 550.29 541.741 550.291H567.937C568.961 550.29 569.943 549.882 570.667 549.158C571.391 548.434 571.799 547.452 571.8 546.428V392.113C571.799 391.089 571.391 390.107 570.667 389.383C569.943 388.659 568.961 388.251 567.937 388.25H541.741Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_17"
                  d="M698.095 346.136L681.111 346.875L525.515 412.522L516.61 419.98L488.38 443.61H399.767L373.08 419.98L362.934 410.993L213.681 347.613L200.39 346.136L244.696 324.722H244.932C254.975 315.189 341.948 307.738 447.766 307.738C553.583 307.738 640.556 315.189 650.599 324.722H651.574L698.095 346.136Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_18"
                  d="M459.653 436.964H428.494C427.339 436.964 426.197 437.191 425.13 437.633C424.064 438.075 423.095 438.722 422.279 439.538C421.463 440.354 420.816 441.323 420.374 442.389C419.932 443.456 419.705 444.598 419.705 445.753V452.544C419.706 454.328 420.25 456.069 421.265 457.536C422.28 459.004 423.718 460.127 425.387 460.757C424.099 462.303 423.395 464.253 423.397 466.266V468.214C423.397 469.603 423.733 470.971 424.375 472.202C425.018 473.433 425.949 474.49 427.089 475.284V501.208H461.057V475.284C462.197 474.49 463.129 473.433 463.771 472.202C464.414 470.971 464.75 469.603 464.75 468.214V466.266C464.752 464.253 464.048 462.303 462.76 460.757C464.429 460.127 465.866 459.004 466.882 457.536C467.897 456.069 468.441 454.328 468.442 452.544V445.753C468.442 444.598 468.214 443.456 467.773 442.389C467.331 441.323 466.684 440.354 465.868 439.538C465.052 438.722 464.083 438.075 463.017 437.633C461.95 437.191 460.807 436.964 459.653 436.964V436.964Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_19"
                  d="M516.61 419.98L488.38 443.61H399.767L373.08 419.98H399.62L400.779 414.198C401.119 412.497 402.037 410.967 403.378 409.867C404.719 408.767 406.4 408.166 408.134 408.165H482.228C483.963 408.166 485.643 408.767 486.984 409.867C488.325 410.967 489.243 412.497 489.583 414.198L490.743 419.98H516.61Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_20"
                  d="M474.719 414.442H415.644V426.257H474.719V414.442Z"
                  fill="#E6E6E6"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Title;
