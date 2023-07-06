FROM tomcat:8.5.47-jdk11-openjdk

COPY /wfnews-api-rest-endpoints/target/wfnews-api-rest-endpoints-1.0.0-SNAPSHOT.war .

ENV TOMCAT_HOME=/usr/local/tomcat \
  CATALINA_HOME=/usr/local/tomcat \
  CATALINA_OUT=/usr/local/tomcat/logs \
  TOMCAT_MAJOR=8 \
  JAVA_OPTS="$JAVA_OPTS -Xss800" 


# TODO: REVERT CHOWN COMMAND TO 770 ONCE DONE TESTING
RUN apt-get update &&\
  apt-get install -y sed  &&\
  rm -rf /usr/local/tomcat/webapps/ROOT  &&\
  mkdir /usr/local/tomcat/webapps/ROOT &&\
  unzip -d /usr/local/tomcat/webapps/ROOT/ '*.war' &&\
  adduser --system tomcat &&\
  chown -R tomcat:0 `readlink -f ${CATALINA_HOME}` &&\
  chmod -R 770 `readlink -f ${CATALINA_HOME}` &&\
  chown -h tomcat:0 ${CATALINA_HOME}

VOLUME /usr/local/tomcat/logs /usr/local/tomcat/work

RUN chmod 766 /usr/local/tomcat/logs && chmod 766 /usr/local/tomcat/work 

# run as tomcat user
USER tomcat

EXPOSE 8080
CMD ["catalina.sh", "run"]