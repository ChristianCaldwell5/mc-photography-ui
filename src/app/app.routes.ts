import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./screens/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'gallery',
        loadComponent: () => import('./screens/gallery/gallery.component').then(m => m.GalleryComponent)
    },
    {
        path: 'process',
        loadComponent: () => import('./screens/process/process.component').then(m => m.ProcessComponent)
    }
];
