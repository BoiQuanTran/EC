import { IconCategory, IconPalette, IconRuler, IconEyeglass } from '@tabler/icons';

const product = {
    id: 'product',
    title: 'Product',
    type: 'group',
    children: [
        {
            id: 'product-main',
            title: 'Main',
            type: 'item',
            url: 'product',
            icon: IconEyeglass,
            breadcrumbs: false
        },
        {
            id: 'product-color',
            title: 'Colors',
            type: 'item',
            url: 'product/color',
            icon: IconPalette,
            breadcrumbs: false
        },
        {
            id: 'product-size',
            title: 'Sizes',
            type: 'item',
            url: 'product/size',
            icon: IconRuler,
            breadcrumbs: false
        },
        {
            id: 'category',
            title: 'Categories',
            type: 'item',
            url: 'product/category',
            icon: IconCategory,
            breadcrumbs: false
        }

    ]
};

export default product;
