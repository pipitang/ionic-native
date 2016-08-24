/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import {Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty} from './plugin';
import {Observable} from 'rxjs/Observable';


enum WechatShareScene {
    SESSION  =  0, // 聊天界面
    TIMELINE = 1, // 朋友圈
    FAVORITE = 2  // 收藏
}

export enum WechatShareType {
    APP     = 1,
    EMOTION = 2,
    FILE    = 3,
    IMAGE   = 4,
    MUSIC   = 5,
    VIDEO   = 6,
    WEBPAGE = 7
}

/**
 * @name Wechat
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import {Wechat} from 'ionic-native';
 *
 * Wechat.xxx()
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-wechat', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Wechat', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/xu-li/cordova-plugin-wechat', // the github repository URL for the plugin
  install: '' // OPTIONAL install command, in case the plugin requires variables
})
export class Wechat {

  /**
   * https://github.com/xu-li/cordova-plugin-wechat#check-if-wechat-is-installed
   */
  @Cordova()
  static isInstalled(): Promise<boolean> { return; }


  /**
   * https://github.com/xu-li/cordova-plugin-wechat#authenticate-using-wechat
   */
  @Cordova()
  static auth(scope: string, state: string): Promise<any>  {return ;}

  /**
   * https://github.com/xu-li/cordova-plugin-wechat#share-text
   */
  @Cordova()
  static share(info: any): Promise<any>  {return ;}

  /**
   * https://github.com/xu-li/cordova-plugin-wechat#send-payment-request
   */
  @Cordova()
  static sendPaymentRequest(params: any): Promise<any>  {return ;}

}
