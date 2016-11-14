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

/**
 * @name Alipay
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import {Alipay} from 'ionic-native';
 *
 * Alipay.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-alipay-base', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Alipay.Base', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '' // OPTIONAL install command, in case the plugin requires variables
})
export class AlipayBase {

  /**
   * Call AliPay 
   * @param params {any} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static pay(params: any): Promise<any> { return; }

}
