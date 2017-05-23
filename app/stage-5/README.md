creating a service for fetching data through HTTP api
## IMPORTANT!
add this code to Info.plist
```
<key>NSAppTransportSecurity</key>
<dict>
   <!--Include to allow all connections (DANGER)-->
    <key>NSAllowsArbitraryLoads</key>
    <true/>
 </dict>
 ```