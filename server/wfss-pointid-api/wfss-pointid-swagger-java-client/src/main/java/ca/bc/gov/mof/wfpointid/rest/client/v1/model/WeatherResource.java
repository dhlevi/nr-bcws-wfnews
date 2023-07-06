/*
 * Wildfire Point ID REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package ca.bc.gov.mof.wfpointid.rest.client.v1.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.google.gson.annotations.SerializedName;

import io.swagger.annotations.ApiModelProperty;

/**
 * WeatherResource
 */
public class WeatherResource {
  @SerializedName("errorCount")
  private Integer errorCount = null;

  @SerializedName("errorMsg")
  private String errorMsg = null;

  @SerializedName("errorDetail")
  private String errorDetail = null;

  @SerializedName("lat")
  private Double lat = null;

  @SerializedName("lon")
  private Double lon = null;

  @SerializedName("timestamp")
  private String timestamp = null;

  @SerializedName("stations")
  private List<WeatherStation> stations = null;

  public WeatherResource errorCount(Integer errorCount) {
    this.errorCount = errorCount;
    return this;
  }

   /**
   * Get errorCount
   * @return errorCount
  **/
  @ApiModelProperty(value = "")
  public Integer getErrorCount() {
    return errorCount;
  }

  public void setErrorCount(Integer errorCount) {
    this.errorCount = errorCount;
  }

  public WeatherResource errorMsg(String errorMsg) {
    this.errorMsg = errorMsg;
    return this;
  }

   /**
   * Get errorMsg
   * @return errorMsg
  **/
  @ApiModelProperty(value = "")
  public String getErrorMsg() {
    return errorMsg;
  }

  public void setErrorMsg(String errorMsg) {
    this.errorMsg = errorMsg;
  }

  public WeatherResource errorDetail(String errorDetail) {
    this.errorDetail = errorDetail;
    return this;
  }

   /**
   * Get errorDetail
   * @return errorDetail
  **/
  @ApiModelProperty(value = "")
  public String getErrorDetail() {
    return errorDetail;
  }

  public void setErrorDetail(String errorDetail) {
    this.errorDetail = errorDetail;
  }

  public WeatherResource lat(Double lat) {
    this.lat = lat;
    return this;
  }

   /**
   * Get lat
   * @return lat
  **/
  @ApiModelProperty(value = "")
  public Double getLat() {
    return lat;
  }

  public void setLat(Double lat) {
    this.lat = lat;
  }

  public WeatherResource lon(Double lon) {
    this.lon = lon;
    return this;
  }

   /**
   * Get lon
   * @return lon
  **/
  @ApiModelProperty(value = "")
  public Double getLon() {
    return lon;
  }

  public void setLon(Double lon) {
    this.lon = lon;
  }

  public WeatherResource timestamp(String timestamp) {
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Get timestamp
   * @return timestamp
  **/
  @ApiModelProperty(value = "")
  public String getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(String timestamp) {
    this.timestamp = timestamp;
  }

  public WeatherResource stations(List<WeatherStation> stations) {
    this.stations = stations;
    return this;
  }

  public WeatherResource addStationsItem(WeatherStation stationsItem) {
    if (this.stations == null) {
      this.stations = new ArrayList<WeatherStation>();
    }
    this.stations.add(stationsItem);
    return this;
  }

   /**
   * Get stations
   * @return stations
  **/
  @ApiModelProperty(value = "")
  public List<WeatherStation> getStations() {
    return stations;
  }

  public void setStations(List<WeatherStation> stations) {
    this.stations = stations;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WeatherResource weatherResource = (WeatherResource) o;
    return Objects.equals(this.errorCount, weatherResource.errorCount) &&
        Objects.equals(this.errorMsg, weatherResource.errorMsg) &&
        Objects.equals(this.errorDetail, weatherResource.errorDetail) &&
        Objects.equals(this.lat, weatherResource.lat) &&
        Objects.equals(this.lon, weatherResource.lon) &&
        Objects.equals(this.timestamp, weatherResource.timestamp) &&
        Objects.equals(this.stations, weatherResource.stations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(errorCount, errorMsg, errorDetail, lat, lon, timestamp, stations);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WeatherResource {\n");
    
    sb.append("    errorCount: ").append(toIndentedString(errorCount)).append("\n");
    sb.append("    errorMsg: ").append(toIndentedString(errorMsg)).append("\n");
    sb.append("    errorDetail: ").append(toIndentedString(errorDetail)).append("\n");
    sb.append("    lat: ").append(toIndentedString(lat)).append("\n");
    sb.append("    lon: ").append(toIndentedString(lon)).append("\n");
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
    sb.append("    stations: ").append(toIndentedString(stations)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
