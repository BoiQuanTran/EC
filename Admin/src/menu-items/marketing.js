import { IconGift } from '@tabler/icons';

const marketing = {
    id: 'marketing',
    title: 'Marketing',
    type: 'group',
    children: [
        {
            id: 'voucher',
            title: 'Voucher',
            type: 'item',
            url: 'voucher',
            icon: IconGift,
            breadcrumbs: false
        }
    ]
};

export default marketing;
