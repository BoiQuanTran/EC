import { IconUser, IconBuildingStore } from '@tabler/icons';


const license = {
    id: 'license',
    title: 'Sales Management',
    type: 'group',
    children: [
        // {
        //     id: 'sale-order',
        //     title: 'Bán hàng',
        //     type: 'collapse',
        //     icon: IconBuildingStore,
        //     children: [
                {
                    id: 'sale-order-id',
                    title: 'Sale orders',
                    type: 'item',
                    url: '/sale-order',
                    icon: IconBuildingStore,
                    breadcrumbs: false
                },
                {
                    id: 'customer',
                    title: 'Customers',
                    type: 'item',
                    url: '/customer',
                    icon: IconUser,
                    breadcrumbs: false
                },
                // {
                //     id: 'payment-info',
                //     title: 'Payment',
                //     type: 'item',
                //     url: '/payment',
                //     breadcrumbs: false
                // }
        //     ]
        // },
        // {
        //     id: 'buy-order',
        //     title: 'Nhập hàng',
        //     type: 'collapse',
        //     icon: IconArchive,
        //     children: [
        //         {
        //             id: 'buy-order-id',
        //             title: 'Phiếu nhâp',
        //             type: 'item',
        //             url: '/buy-order',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'suplier',
        //             title: 'Nhà cung cấp',
        //             type: 'item',
        //             url: '/supplier',
        //             breadcrumbs: false
        //         }
        //     ]

        // }
    ]
};

export default license;
