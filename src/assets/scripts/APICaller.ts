import {APIError} from "../../types/system/APIError";
import {ServicesResponse} from "../../types/responses/Services";


interface ApiPromise<T> {
    then<TResult1 = T, TResult2 = APIError>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: APIError) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    catch<TResult = APIError>(onrejected?: ((reason: APIError) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}


class APICaller {
    private host = 'localhost';


    public getServices(): ApiPromise<ServicesResponse> {
        return this.requestSender('POST', '/testing')
    }

    private requestSender(method: string, url: string, data: object = {}): ApiPromise<any> {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            const bodyData = JSON.stringify(data);

            req.onloadend = (ev => {
                if (req.status !== 200) {
                    reject({
                        code: req.status,
                        message: ''
                    });
                    return;
                }
                resolve(JSON.parse(req.responseText) ?? null)

                return;
            })

            req.onerror = (ev => {
                reject({
                    code: req.status,
                    message: ''
                });
                return;
            })

            req.open(method, this.host + url)
            req.setRequestHeader('Content-type', 'application/json')

            req.send(bodyData);
        });
    }
}


export default APICaller