import { IconUser } from '@tabler/icons';

const internal = {
    id: 'internal',
    title: 'Internal',
    type: 'group',
    children: [
        {
            id: 'staff',
            title: 'Staff',
            type: 'item',
            url: 'staff',
            icon: IconUser,
            breadcrumbs: false
        }

    ]
};

export default internal;
