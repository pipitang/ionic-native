import {Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty} from './plugin';
import {Observable} from 'rxjs/Observable';

/**
 * @name JpushPlugin
 * @description
 * This plugin is a simple native wrapper for Jpush Plugin. Actually, the way of creating a new
 * native plugin in Ionic is arguable and should be changed in future so that the customized
 * implementation does not need a folk of the project any more.
 * 
 * NOTE: we don't model any message, but just expose them as a general object. In addition, 
 * we currently just implement  interfaces needed in our own's project and new interfaces
 * can be added as requested.
 *
 * @usage
 * ```
 * import {JpushPlugin} from 'ionic-native';
 *
 * JpushPlugin.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  plugin: 'jpush-phonegap-plugin', 
  pluginRef: 'window.plugins.jPushPlugin',  
  repo: 'https://github.com/pipitang/ionic-native',
  install: '' // OPTIONAL install command, in case the plugin requires variables
})
export class JpushPlugin {

  /**
   * Init the plugin 
   * 
   * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md#api---init
   * 
   */
  @Cordova({ sync: true })
  static init(): void {}

  @Cordova({ sync: true })
  static stopPush(): void {}

  @Cordova({ sync: true })
  static resumePush(): void {}

  @Cordova({ sync: true })
  static isPushStopped(callback: (result: number) => any): void {}

  /**
   * Get the registration id
   * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md#api---getregistrationid
   * 
   */
  @Cordova({ sync: true})
  static getRegistrationID(callback: (id: string) => any): void {}

  @CordovaProperty
  static get openNotification(): any {
    return window['cordova'].jPushPlugin.openNotification;
  }

  @CordovaProperty
  static get receiveNotification(): any {
    return window['cordova'].plugins.jPushPlugin.receiveNotification;
  }
  
  static addReceiveNotificationListener(callback: (event: any) => any) {
    document.addEventListener("jpush.receiveNotification", callback, false);
  }

  static addOpenNotification(callback: (event: any) => any) {
    document.addEventListener("jpush.openNotification", callback, false);
  }

}
