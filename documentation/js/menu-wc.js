'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dto-swagger-compodoc documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' : 'data-target="#xs-controllers-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' :
                                            'id="xs-controllers-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' : 'data-target="#xs-injectables-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' :
                                        'id="xs-injectables-links-module-AppModule-0d45dc29d1cec8d72b66327b4fbb8c3fb634bcd0bde92951a3006a863bd64201dcbb45817dc427e1cb773c7be402da0e0af2628b121bbca2853d75c2e53ffc2d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' : 'data-target="#xs-controllers-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' :
                                            'id="xs-controllers-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' : 'data-target="#xs-injectables-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' :
                                        'id="xs-injectables-links-module-UsersModule-2994e6b9ccc29eb5d00f198982e8c3d614752adb758d39ea27fda9e9203fd4e16278b7b17f4ceb58ba18b732ec3ebd419d3b2ce3978f5dcdbf903c45494c56f9"' }>
                                        <li class="link">
                                            <a href="injectables/UserMapper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMapper</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidatateErrors.html" data-type="entity-link" >ValidatateErrors</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMapper.html" data-type="entity-link" >UserMapper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});