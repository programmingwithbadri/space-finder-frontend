import { Space } from '../model/Model';
import { ICreateSpaceState } from '../components/spaces/CreateSpace';
import { S3, config } from 'aws-sdk';
import { config as appConfig } from './config';
import { generateRandomId } from '../utils/Utils';

config.update({
    region: appConfig.REGION,
});

export class DataService {
    private s3Client = new S3({
        region: appConfig.REGION,
    });

    public async createSpace(iCreateSpace: ICreateSpaceState) {
        if (iCreateSpace.photo) {
            const photoUrl = await this.uploadPublicFile(
                iCreateSpace.photo,
                appConfig.SPACES_PHOTOS_BUCKET!
            );
            console.log(photoUrl);
            iCreateSpace.photoURL = photoUrl;
            iCreateSpace.photo = undefined;
        }
        const requestUrl = appConfig.api.spacesUrl;
        const requestOptions: RequestInit = {
            method: 'POST',
            body: JSON.stringify(iCreateSpace),
        };
        const result = await fetch(requestUrl, requestOptions);
        const resultJSON = await result.json();

        return JSON.stringify(resultJSON.id);
    }

    private async uploadPublicFile(file: File, bucket: string) {
        const fileName = file.name;
        const uploadResult = await new S3({ region: appConfig.REGION })
            .upload({
                Bucket: bucket,
                Key: fileName,
                Body: file,
                ACL: 'public-read',
            })
            .promise();
        return uploadResult.Location;
    }

    public async getSpaces(): Promise<Space[]> {
        const requestUrl = appConfig.api.spacesUrl;
        const requestResult = await fetch(requestUrl, {
            method: 'GET',
        });
        const responseJSON = await requestResult.json();
        return responseJSON;
    }

    public async reserveSpace(spaceId: string): Promise<string | undefined> {
        if (spaceId === '123') {
            return '5555';
        } else {
            return undefined;
        }
    }
}
