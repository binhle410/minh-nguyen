import { Routes } from '@angular/router';
import './app.loader.ts';
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BaThemeConfig } from './theme/theme.config';
import { BaMenuService } from './theme';
import {ComponentsHelper } from 'ng2-bootstrap';
import { MENU } from './app.menu';

import {AuthHttp} from 'angular2-jwt';
import {Response} from "@angular/http";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  thing: Response; 
  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private _config: BaThemeConfig,
              private _menuService: BaMenuService,
              private viewContainerRef: ViewContainerRef,
              public authHttp: AuthHttp) {

    //this.getAuth();

    this._menuService.updateMenuByRoutes(<Routes>MENU);

    this._fixModals();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  /** START dev FUNC -----------------------------------------------------  */
  /** 
   * 1. Get Auth - Submit LOGIN
  */  
  getAuth() {
    this.authHttp.get('https://localhost/projects/symfony3/health/web/app_dev.php/api/system')
        .subscribe(
            data => {
              this.thing = data;
              console.log(data);
            },
            err => console.log(err),
            () => console.log('Request Complete')
        );
  }

  /** 
   * 2. _loadImages()
  */ 
  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

  /** 
   * 3. _fixModals()
  */ 
  private _fixModals(): void {
    ComponentsHelper.prototype.getRootViewContainerRef = function () {
      // https://github.com/angular/angular/issues/9293
      if (this.root) {
        return this.root;
      }
      var comps = this.applicationRef.components;
      if (!comps.length) {
        throw new Error("ApplicationRef instance not found");
      }
      try {
        /* one more ugly hack, read issue above for details */
        var rootComponent = this.applicationRef._rootComponents[0];
        this.root = rootComponent._component.viewContainerRef;
        return this.root;
      }
      catch (e) {
        throw new Error("ApplicationRef instance not found");
      }
    };
  }


} // END COMP
