/** 
######################################################################
############################## SERVER URLS ###########################
######################################################################
*/

import { SERVER_URL } from './configuration';

class ApplicationUrls {
    private static appUrlsInstance: ApplicationUrls;
    public serverUrl: string;

    public static getInstance(): ApplicationUrls {
        if (!ApplicationUrls.appUrlsInstance) {
            ApplicationUrls.appUrlsInstance = new ApplicationUrls();
            ApplicationUrls.appUrlsInstance.serverUrl = `${SERVER_URL}`;
        }
        return ApplicationUrls.appUrlsInstance;
    }

    /**
     * Accounts
     */

    get loginUrl() {
        return this.serverUrl + '/user/login';
    }
    get registrationUrl() {
        return this.serverUrl + '/user/register';
    }
    get logoutUrl() {
        return this.serverUrl + '/user/logout/';
    }

    /**
     * Orders
     */

    get ordersListUrl() {
        return this.serverUrl + 'orders';
    }
}

export let applicationUrls = ApplicationUrls.getInstance();
