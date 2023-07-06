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

import java.util.Objects;

import com.google.gson.annotations.SerializedName;

import io.swagger.annotations.ApiModelProperty;

/**
 * WeatherHourly
 */
public class WeatherHourly {
  @SerializedName("hour")
  private String hour = null;

  @SerializedName("index")
  private Integer index = null;

  @SerializedName("temp")
  private Double temp = null;

  @SerializedName("relativeHumidity")
  private Integer relativeHumidity = null;

  @SerializedName("windSpeed")
  private Double windSpeed = null;

  @SerializedName("windDirection")
  private Integer windDirection = null;

  @SerializedName("windCardinalDir")
  private String windCardinalDir = null;

  @SerializedName("precipitation")
  private Double precipitation = null;

  @SerializedName("fineFuelMoistureCode")
  private Double fineFuelMoistureCode = null;

  @SerializedName("initialSpreadIndex")
  private Double initialSpreadIndex = null;

  @SerializedName("fireWeatherIndex")
  private Double fireWeatherIndex = null;

  public WeatherHourly hour(String hour) {
    this.hour = hour;
    return this;
  }

   /**
   * Get hour
   * @return hour
  **/
  @ApiModelProperty(value = "")
  public String getHour() {
    return hour;
  }

  public void setHour(String hour) {
    this.hour = hour;
  }

  public WeatherHourly index(Integer index) {
    this.index = index;
    return this;
  }

   /**
   * Get index
   * @return index
  **/
  @ApiModelProperty(value = "")
  public Integer getIndex() {
    return index;
  }

  public void setIndex(Integer index) {
    this.index = index;
  }

  public WeatherHourly temp(Double temp) {
    this.temp = temp;
    return this;
  }

   /**
   * Get temp
   * @return temp
  **/
  @ApiModelProperty(value = "")
  public Double getTemp() {
    return temp;
  }

  public void setTemp(Double temp) {
    this.temp = temp;
  }

  public WeatherHourly relativeHumidity(Integer relativeHumidity) {
    this.relativeHumidity = relativeHumidity;
    return this;
  }

   /**
   * Get relativeHumidity
   * @return relativeHumidity
  **/
  @ApiModelProperty(value = "")
  public Integer getRelativeHumidity() {
    return relativeHumidity;
  }

  public void setRelativeHumidity(Integer relativeHumidity) {
    this.relativeHumidity = relativeHumidity;
  }

  public WeatherHourly windSpeed(Double windSpeed) {
    this.windSpeed = windSpeed;
    return this;
  }

   /**
   * Get windSpeed
   * @return windSpeed
  **/
  @ApiModelProperty(value = "")
  public Double getWindSpeed() {
    return windSpeed;
  }

  public void setWindSpeed(Double windSpeed) {
    this.windSpeed = windSpeed;
  }

  public WeatherHourly windDirection(Integer windDirection) {
    this.windDirection = windDirection;
    return this;
  }

   /**
   * Get windDirection
   * @return windDirection
  **/
  @ApiModelProperty(value = "")
  public Integer getWindDirection() {
    return windDirection;
  }

  public void setWindDirection(Integer windDirection) {
    this.windDirection = windDirection;
  }

  public WeatherHourly windCardinalDir(String windCardinalDir) {
    this.windCardinalDir = windCardinalDir;
    return this;
  }

   /**
   * Get windCardinalDir
   * @return windCardinalDir
  **/
  @ApiModelProperty(value = "")
  public String getWindCardinalDir() {
    return windCardinalDir;
  }

  public void setWindCardinalDir(String windCardinalDir) {
    this.windCardinalDir = windCardinalDir;
  }

  public WeatherHourly precipitation(Double precipitation) {
    this.precipitation = precipitation;
    return this;
  }

   /**
   * Get precipitation
   * @return precipitation
  **/
  @ApiModelProperty(value = "")
  public Double getPrecipitation() {
    return precipitation;
  }

  public void setPrecipitation(Double precipitation) {
    this.precipitation = precipitation;
  }

  public WeatherHourly fineFuelMoistureCode(Double fineFuelMoistureCode) {
    this.fineFuelMoistureCode = fineFuelMoistureCode;
    return this;
  }

   /**
   * Get fineFuelMoistureCode
   * @return fineFuelMoistureCode
  **/
  @ApiModelProperty(value = "")
  public Double getFineFuelMoistureCode() {
    return fineFuelMoistureCode;
  }

  public void setFineFuelMoistureCode(Double fineFuelMoistureCode) {
    this.fineFuelMoistureCode = fineFuelMoistureCode;
  }

  public WeatherHourly initialSpreadIndex(Double initialSpreadIndex) {
    this.initialSpreadIndex = initialSpreadIndex;
    return this;
  }

   /**
   * Get initialSpreadIndex
   * @return initialSpreadIndex
  **/
  @ApiModelProperty(value = "")
  public Double getInitialSpreadIndex() {
    return initialSpreadIndex;
  }

  public void setInitialSpreadIndex(Double initialSpreadIndex) {
    this.initialSpreadIndex = initialSpreadIndex;
  }

  public WeatherHourly fireWeatherIndex(Double fireWeatherIndex) {
    this.fireWeatherIndex = fireWeatherIndex;
    return this;
  }

   /**
   * Get fireWeatherIndex
   * @return fireWeatherIndex
  **/
  @ApiModelProperty(value = "")
  public Double getFireWeatherIndex() {
    return fireWeatherIndex;
  }

  public void setFireWeatherIndex(Double fireWeatherIndex) {
    this.fireWeatherIndex = fireWeatherIndex;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WeatherHourly weatherHourly = (WeatherHourly) o;
    return Objects.equals(this.hour, weatherHourly.hour) &&
        Objects.equals(this.index, weatherHourly.index) &&
        Objects.equals(this.temp, weatherHourly.temp) &&
        Objects.equals(this.relativeHumidity, weatherHourly.relativeHumidity) &&
        Objects.equals(this.windSpeed, weatherHourly.windSpeed) &&
        Objects.equals(this.windDirection, weatherHourly.windDirection) &&
        Objects.equals(this.windCardinalDir, weatherHourly.windCardinalDir) &&
        Objects.equals(this.precipitation, weatherHourly.precipitation) &&
        Objects.equals(this.fineFuelMoistureCode, weatherHourly.fineFuelMoistureCode) &&
        Objects.equals(this.initialSpreadIndex, weatherHourly.initialSpreadIndex) &&
        Objects.equals(this.fireWeatherIndex, weatherHourly.fireWeatherIndex);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hour, index, temp, relativeHumidity, windSpeed, windDirection, windCardinalDir, precipitation, fineFuelMoistureCode, initialSpreadIndex, fireWeatherIndex);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WeatherHourly {\n");
    
    sb.append("    hour: ").append(toIndentedString(hour)).append("\n");
    sb.append("    index: ").append(toIndentedString(index)).append("\n");
    sb.append("    temp: ").append(toIndentedString(temp)).append("\n");
    sb.append("    relativeHumidity: ").append(toIndentedString(relativeHumidity)).append("\n");
    sb.append("    windSpeed: ").append(toIndentedString(windSpeed)).append("\n");
    sb.append("    windDirection: ").append(toIndentedString(windDirection)).append("\n");
    sb.append("    windCardinalDir: ").append(toIndentedString(windCardinalDir)).append("\n");
    sb.append("    precipitation: ").append(toIndentedString(precipitation)).append("\n");
    sb.append("    fineFuelMoistureCode: ").append(toIndentedString(fineFuelMoistureCode)).append("\n");
    sb.append("    initialSpreadIndex: ").append(toIndentedString(initialSpreadIndex)).append("\n");
    sb.append("    fireWeatherIndex: ").append(toIndentedString(fireWeatherIndex)).append("\n");
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

