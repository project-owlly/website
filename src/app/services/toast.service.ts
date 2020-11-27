import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';

import {ToastComponent} from '../components/toast/toast.component';

export interface ToastOptions {
  msg: string;
  status: 'success' | 'error';
  position: 'top' | 'bottom';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private componentRef: ComponentRef<ToastComponent> | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {}

  // https://stackoverflow.com/a/51767980/5404186
  async open(component: Type<ToastComponent>, options: ToastOptions): Promise<ComponentRef<ToastComponent>> {
    if (this.componentRef) {
      return this.componentRef;
    }

    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);

    this.componentRef.instance.options = options;

    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return this.componentRef;
  }

  async close(): Promise<void> {
    if (!this.componentRef) {
      return;
    }

    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();

    this.componentRef = undefined;
  }
}
