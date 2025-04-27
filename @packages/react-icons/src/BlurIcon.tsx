import { AccessibleIcon } from '@radix-ui/react-accessible-icon'

import type { IconProps } from './types'

export const BlurIcon = ({ label = 'blur', ...props }: IconProps) => (
  <AccessibleIcon label={label}>
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.00003 1.84861C4.10114 2.1017 1.82707 4.53515 1.82707 7.49972C1.82707 10.4643 4.10114 12.8977 7.00003 13.1508V1.84861ZM8.00003 13.1508C10.8988 12.8976 13.1727 10.4642 13.1727 7.49972C13.1727 4.53524 10.8988 2.10185 8.00003 1.84864V13.1508Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 3.5C7 3.22386 7.24625 3 7.55 3H11.95C12.2538 3 12.5 3.22386 12.5 3.5C12.5 3.77614 12.2538 4 11.95 4H7.55C7.24625 4 7 3.77614 7 3.5Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 7.5C7 7.22386 7.3134 7 7.7 7H13.3C13.6866 7 14 7.22386 14 7.5C14 7.77614 13.6866 8 13.3 8H7.7C7.3134 8 7 7.77614 7 7.5Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 9.5C7 9.22386 7.29102 9 7.65 9H12.85C13.209 9 13.5 9.22386 13.5 9.5C13.5 9.77614 13.209 10 12.85 10H10.25H7.65C7.29102 10 7 9.77614 7 9.5Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 5.5C7 5.22386 7.29102 5 7.65 5H12.85C13.209 5 13.5 5.22386 13.5 5.5C13.5 5.77614 13.209 6 12.85 6H7.65C7.29102 6 7 5.77614 7 5.5Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 11.5C7 11.2239 7.24625 11 7.55 11H11.95C12.2538 11 12.5 11.2239 12.5 11.5C12.5 11.7761 12.2538 12 11.95 12H7.55C7.24625 12 7 11.7761 7 11.5Z'
          fill='currentColor'
        />
      </g>
    </svg>
  </AccessibleIcon>
)
