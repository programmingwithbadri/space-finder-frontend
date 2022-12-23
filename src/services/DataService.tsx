import { Space } from '../model/Model';
import { ICreateSpaceState } from '../components/spaces/CreateSpace';
export class DataService {
    public async createSpace(iCreateSpace: ICreateSpaceState) {
        return '123';
    }

    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = [];
        result.push({
            location: 'Paris',
            name: 'Best Location',
            spaceId: '123',
        });
        result.push({
            location: 'Paris',
            name: 'Best Location',
            spaceId: '124',
        });
        result.push({
            location: 'Paris',
            name: 'Best Location',
            spaceId: '125',
        });
        return result;
    }

    public async reserveSpace(spaceId: string): Promise<string | undefined> {
        if (spaceId === '123') {
            return '5555';
        } else {
            return undefined;
        }
    }
}
