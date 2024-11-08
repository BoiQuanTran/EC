import { IconDashboard } from '@tabler/icons';

const icons = { IconDashboard };

const dashboard = {
    id: 'dashboard',
    title: 'General',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Statistics',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
