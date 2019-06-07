import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';
import { Motion, spring } from 'react-motion';
import ReactTooltip from 'react-tooltip';
import { scaleLinear } from 'd3-scale';

import mapData from '../../static/map.json';

import './Map.scss';

const minValue = 5;
const maxValue = 16;

const minColor = '#FF5722';
const maxColor = '#DF3702';

const customScale = scaleLinear()
  .domain([minValue, maxValue])
  .range([minColor, maxColor]);

class Map extends Component {
  state = {
    center: [0, 20],
    zoom: 1,
    country: {},
    mapChange: false
  };

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.country.code !== this.props.country.code) {
      this.setState({ mapChange: true, country: this.props.country }, () => {
        this.setState({ mapChange: false });
      });
      this.handleSelectCountry(this.props.country);
    }
  }
  handleZoomIn = () => {
    this.setState({
      zoom: this.state.zoom * 2
    });
  };
  handleZoomOut = () => {
    this.setState({
      zoom: this.state.zoom / 2
    });
  };
  handleSelectCountry = country => {
    this.setState({
      zoom: 2,
      center: country.coordinates
    });
  };
  handleReset = () => {
    this.setState({
      center: [0, 20],
      zoom: 1
    });
  };
  render() {
    return (
      <div className="map">
        <div className="buttons">
          <button className="btn" onClick={this.handleZoomIn}>
            {'Zoom in'}
          </button>
          <button className="btn" onClick={this.handleZoomOut}>
            {'Zoom out'}
          </button>
          <button className="btn" onClick={this.handleReset}>
            {'Reset'}
          </button>
        </div>
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20
          }}
          style={{
            zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
            x: spring(this.state.center[0], { stiffness: 210, damping: 20 }),
            y: spring(this.state.center[1], { stiffness: 210, damping: 20 })
          }}
        >
          {({ zoom, x, y }) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={551}
              style={{
                width: '100%',
                height: '90%'
              }}
            >
              <ZoomableGroup center={[x, y]} zoom={zoom}>
                <Geographies
                  geography={mapData}
                  disableOptimization={this.state.mapChange}
                >
                  {(geographies, projection) =>
                    geographies.map((geography, i) => {
                      const country =
                        this.state.country.code === geography.properties.ISO_A2;

                      return (
                        geography.id !== '010' && (
                          <Geography
                            key={i}
                            geography={geography}
                            data-tip={geography.properties.NAME}
                            cacheId={geography.properties.ISO_A2}
                            onClick={() => {
                              this.props.onSelectCountry({
                                code: geography.properties.ISO_A2,
                                continent: geography.properties.CONTINENT
                              });
                            }}
                            projection={projection}
                            style={{
                              default: {
                                fill: country ? customScale(10) : '#ECEFF1',
                                stroke: '#607D8B',
                                strokeWidth: 0.75,
                                outline: 'none'
                              },
                              hover: {
                                fill: '#CFD8DC',
                                stroke: '#607D8B',
                                strokeWidth: 0.75,
                                outline: 'none'
                              },
                              pressed: {
                                fill: '#FF5722',
                                stroke: '#607D8B',
                                strokeWidth: 0.75,
                                outline: 'none'
                              }
                            }}
                          />
                        )
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
        <ReactTooltip />
      </div>
    );
  }
}

export default Map;
