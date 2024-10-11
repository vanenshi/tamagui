import { YStack } from 'tamagui'
import { forwardRef } from 'react'

export const BentoIcon = forwardRef(
  ({ bright, scale = 1 }: { bright?: boolean; scale?: number }, ref) => (
    <YStack
      tag="span"
      ref={ref as any}
      p="$4"
      m="$-4"
    >
      <svg
        width={25 * scale}
        height={25 * scale}
        viewBox="0 0 590 590"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M331.699219,77 C397.585791,77 553.867188,126 591,203.804688 C597.789062,232.210938 591,365.976563 591,380.359781 C591,394.743 588.570152,411.629121 568.416463,427.735005 C548.262774,443.840889 460.015487,502.181785 392.264876,533.765268 C324.514266,565.34875 279.347192,549.557009 243.213533,533.765268 C207.079875,517.973527 62.5452392,434.502894 51.2534708,427.735005 C39.9617024,420.967116 36.6786837,413.052771 35.444995,396.151522 C34.6474882,385.225863 35.1101929,333.807432 35.3889527,284.149169 C37.6783031,285.973204 40.2636523,287 43,287 C52.3888407,287 60,274.911688 60,260 C60,245.088312 52.3888407,233 43,233 C40.3287362,233 37.8013732,233.978533 35.5522626,235.722216 C35.5498644,226.718685 35.5181972,218.410244 35.444995,211.162553 C34.896689,156.875182 265.812646,77 331.699219,77 Z M105.547166,341.605381 C102.301952,340.935123 99.1278339,343.022538 98.457576,346.267753 L98.457576,346.267753 L93.4534253,370.496548 C93.4324234,370.598234 93.4140645,370.700448 93.3983673,370.803087 C92.8974061,374.07871 95.1467137,377.140236 98.4223367,377.641197 C117.363195,380.537939 133.101925,385.192412 145.638528,391.604615 C157.838745,397.844764 173.79093,408.083992 193.495082,422.322299 C194.228803,422.852489 195.058395,423.235332 195.937901,423.449618 C199.694012,424.364775 203.480823,422.061726 204.395984,418.305615 L204.395984,418.305615 L211.065504,390.931656 C211.185397,390.439573 211.258289,389.937216 211.283199,389.431351 C211.500497,385.018419 208.099265,381.264877 203.686333,381.047579 L203.686333,381.047579 L148.075583,378.309236 L108.318088,342.995439 C107.532163,342.297356 106.576628,341.818004 105.547166,341.605381 Z M313,326 C295.879173,326 282,343.460895 282,365 C282,386.539105 295.879173,404 313,404 C330.120827,404 344,386.539105 344,365 C344,343.460895 330.120827,326 313,326 Z"
            id="Path-22"
            fill={bright ? `var(--color10)` : `var(--color)`}
          ></path>
        </g>
      </svg>
    </YStack>
  )
)
