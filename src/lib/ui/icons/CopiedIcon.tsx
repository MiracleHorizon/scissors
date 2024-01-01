import type { SVGProps } from 'react'

export function CopiedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4V10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006V2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006H9.5C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.3456 7.05486C11.5032 7.1565 11.5474 7.36491 11.4444 7.52036L9.12622 11.0178C9.07159 11.1002 8.98308 11.1548 8.88406 11.1673C8.78503 11.1798 8.68544 11.1488 8.61157 11.0825L7.11159 9.7374C6.97228 9.61247 6.96201 9.39978 7.08866 9.26235C7.21531 9.12493 7.43091 9.1148 7.57022 9.23973L8.77437 10.3196L10.8737 7.15229C10.9768 6.99685 11.188 6.95323 11.3456 7.05486Z'
        fill='currentColor'
      />
    </svg>
  )
}