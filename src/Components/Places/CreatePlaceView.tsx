import React from 'react';
import { nanoid } from "nanoid";
import PlaceForm from './PlaceForm'
import { withRouter } from 'react-router-dom'

class CreatePlaceView extends React.Component<any, any> {
  render() {
    return <PlaceForm
      id={nanoid()}
      title={"Create a New Place"}
      name={''}
      address=""
      lngLat={this.props.lngLat}
      sensors={{}}
      admins={{}}
      onSave={(id: string) => this.props.history.push(`/places/${id}`)} />
  }
}

export default withRouter(CreatePlaceView);
