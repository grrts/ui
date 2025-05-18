import HomeView from '@/internal/preview/views/HomeView.vue'
import ComponentsView from '@/internal/preview/views/ComponentsView.vue'
import InstallView from '@/internal/preview/views/InstallView.vue'
import ButtonsView from '@/internal/preview/views/components/ButtonsView.vue'
import TextView from '@/internal/preview/views/components/TextView.vue'
import CardView from '@/internal/preview/views/components/CardView.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },{
        path: '/components/',
        name: 'components',
        component: ComponentsView,
        children: [
            {
                path: 'buttons',
                name: 'buttons',
                component: ButtonsView,
            },
            {
                path: 'text',
                name: 'text',
                component: TextView,
            },
            {
                path: 'card',
                name: 'card',
                component: CardView,
            },
        ],
    },{
        path: '/installation/',
        name: 'installation',
        component: InstallView,
    },
];
