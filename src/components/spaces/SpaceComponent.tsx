import { Component } from 'react';
import genericImage from '../../assets/generic-image.jpg';

interface SpaceComponentProps {
    spaceId: string;
    name: string;
    location: string;
    photoURL?: string;
    reserveSpace: (spaceId: string) => void;
}

export class SpaceComponent extends Component<SpaceComponentProps> {
    private renderImage() {
        if (this.props.photoURL) {
            return <img src={this.props.photoURL} alt="" />;
        } else {
            return <img src={genericImage} alt="" />;
        }
    }

    render() {
        return (
            <div>
                {this.renderImage()}
                <label>{this.props.name}</label>
                <br />
                <label>{this.props.spaceId}</label>
                <br />
                <label>{this.props.location}</label>
                <br />
                <button
                    onClick={() => this.props.reserveSpace(this.props.spaceId)}
                >
                    Reserve
                </button>
            </div>
        );
    }
}
