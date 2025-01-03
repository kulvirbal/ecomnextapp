import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb';

const BreadCrumbs = ({name}: {name: string}) => {
  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/" className='capitalize text-lg'>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/products" className='capitalize text-lg'>
                    Products
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage className='capitalize text-lg'>
                {name}
            </BreadcrumbPage>
        </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbs