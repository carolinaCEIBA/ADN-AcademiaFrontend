import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkProgramacion = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkAprendices = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkRegistroAp = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));
    linkRegistroPr = element(by.xpath('/html/body/app-root/app-navbar/nav/a[6]'));


    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    
    async clickBotonAprendices() {
        await this.linkAprendices.click();
    }

    
    async clickBotonProgramacion() {
        await this.linkProgramacion.click();
    }

    
    async clickBotonRegistroAp() {
        await this.linkRegistroAp.click();
    }

    
    async clickBotonRegistroPr() {
        await this.linkRegistroPr.click();
    }
}
