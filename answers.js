/*Answers to multiple choice and fill-in-the-blank questions*/
var add = tests.add;

/*
 * template:
 * add(question, answer0 [, answer1, ...]);
 */
//Essentials final exam
add('Match the order in which the link-state routing process occurs on a router. (Not all options are used.)', 'Step 1- Each router learns about its own directly connected networks.', 'Step 2- Each router is responsible for “saying hello” to its neighbors on directly connected networks.', 'Step 3- Each router builds a Link-State Packet (LSP) containing the state of each directly connected link', 'Step 4- Each router floods the LSP to all neighbors, who then store all LSPs received in a database', 'Step 5- Each router uses the database to construct a complete map of the topology and computes the best');
add('What are two features of a link-state routing protocol? (Choose two.)', 'Routers send triggered updates in response to a change.', 'Routers create a topology of the network by using information from other routers.');
add('Fill in the blank. In IPv6, all routes are level   ” 1 ”  ultimate routes.', '1');
add('Which switching method drops frames that fail the FCS check?', 'store-and-forward switching');
add('Which summary IPv6 static route statement can be configured to summarize only the routes to networks 2001:db8:cafe::/58 through 2001:db8:cafe:c0::/58?', 'ipv6 route 2001:db8:cafe::/56 S0/0/0');
add('Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?', '3');
add('When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?', 'native VLAN ID');
add('A college marketing department has a networked storage device that uses the IP address 10.18.7.5, TCP port 443 for encryption, and UDP port 4365 for video streaming. The college already uses PAT on the router that connects to the Internet. The router interface has the public IP address of 209.165.200.225/30. The IP NAT pool currently uses the IP addresses ranging from 209.165.200.228-236. Which configuration would the network administrator add to allow this device to be accessed by the marketing personnel from home?', 'ip nat inside source static tcp 10.18.7.5 443 209.165.200.225 443', 'ip nat inside source static udp 10.18.7.5 4365 209.165.200.225 4365');
add('Which statement describes a route that has been learned dynamically?', 'It is automatically updated and maintained by routing protocols.');
add('A network administrator is explaining to a junior colleague the use of the lt and gt keywords when filtering packets using an extended ACL. Where would the lt or gt keywords be used?', 'in an IPv4 extended ACL that allows packets from a range of TCP ports destined for a specific network device');
add('Refer to the exhibit. How did the router obtain the last route that is shown?', 'Another router in the same organization provided the default route by using a dynamic routing protocol.');
add('Refer to the exhibit. A Layer 3 switch routes for three VLANs and connects to a router for Internet connectivity. Which two configurations would be applied to the switch? (Choose two.)', '(config)# interface gigabitethernet 1/1', '(config-if)# no switchport', ' ', '(config)# ip routing');
add('A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?', 'Only devices in VLAN 20 see the frame.');
add('Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)', 'ICMP message type', 'destination UDP port number');
add('Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?', 'Change the destination network and mask to 0.0.0.0 0.0.0.0');
add('How is the router ID for an OSPFv3 router determined?', 'the highest IPv4 address on an active interface');
add('Two employees in the Sales department work different shifts with their laptop computers and share the same Ethernet port in the office. Which set of commands would allow only these two laptops to use the Ethernet port and create violation log entry without shutting down the port if a violation occurs?', 'switchport mode access', 'switchport port-security', 'switchport port-security maximum 2', 'switchport port-security mac-address sticky', 'switchport port-security violation restrict');
add('Which two factors are important when deciding which interior gateway routing protocol to use? (Choose two.)', 'speed of convergence', 'scalability');
add('Refer to the exhibit. Which type of route is 172.16.0.0/16', 'level 1 parent route');
add('What caused the following error message to appear? 01:11:12: %PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/8, putting Fa0/8 in err-disable state 01:11:12: %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred, caused by MAC address 0011.a0d4.12a0 on port FastEthernet0/8. 01:11:13: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/8, changed state to down 01:11:14: %LINK-3-UPDOWN: Interface FastEthernet0/8, changed state to down', 'Port security was enabled on the switch port, and an unauthorized connection was made on switch port Fa0/8.');
add('Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)', 'In a switched network, they are mostly configured between switches at the core and distribution layers.', 'They are not associated with a particular VLAN.');
add('A network administrator is adding ACLs to a new IPv6 multirouter environment. Which IPv6 ACE is automatically added implicitly at the end of an ACL so that two adjacent routers can discover each other?', 'permit icmp any any nd-na');
add('What does the cost of an OSPF link indicate?', 'A lower cost indicates a better path to the destination than a higher cost does.');
add('Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)', 'outbound', 'R1 Gi0/1.12');
add('On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?', 'Switch(config)# no vlan 100');
add('A router needs to be configured to route within OSPF area 0. Which two commands are required to accomplish this? (Choose two.)', 'RouterA(config)# router ospf 1', 'RouterA(config-router)# network 192.168.2.0 0.0.0.255 area 0');
add('What is a function of the distribution layer?', 'interconnection of large-scale networks in wiring closets');
add('A small-sized company has 20 workstations and 2 servers. The company has been assigned a group of IPv4 addresses 209.165.200.224/29 from its ISP. What technology should the company implement in order to allow the workstations to access the services over the Internet?', 'dynamic NAT');
add('Which three requirements are necessary for two OSPFv2 routers to form an adjacency? (Choose three.)', 'The link interface subnet masks must match.', 'The two routers must include the inter-router link network in an OSPFv2 network command',  'The OSPF hello or dead timers on each router must match.');
add('Which three pieces of information does a link-state routing protocol use initially as link-state information for locally connected links? (Choose three.)', 'the cost of that link', 'the type of network link', 'the link router interface IP address and subnet mask');
add('What is a disadvantage of NAT?', 'There is no end-to-end addressing.');
add('Refer to the exhibit. The partial configuration that is shown was used to configure router on a stick for VLANS 10, 30, and 50. However, testing shows that there are some connectivity problems between the VLANs. Which configuration error is causing this problem?', 'The wrong VLAN has been configured on subinterface Fa0/0.50.');
add('Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?', 'The ip helper-address command was applied on the wrong interface.');
add('What best describes the operation of distance vector routing protocols?', 'They send their routing tables to directly connected neighbors.');
add('A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?', 'Switch(config)# interface gigabitethernet 1/1', 'Switch(config-if)# switchport mode trunk');
add('Which three advantages are provided by static routing? (Choose three.)', 'The path a static route uses to send data is known.', 'Static routing does not advertise over the network, thus providing better security.', 'Static routing typically uses less network bandwidth and fewer CPU operations than dynamic routing does.');
add('When configuring a switch to use SSH for virtual terminal connections, what is the purpose of the crypto key generate rsa command?', 'create a public and private key pair');
add('Which information does a switch use to populate the MAC address table?', 'the source MAC address and the incoming port');
add('Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?', 'The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What is the problem preventing PC0 and PC1 from communicating with PC2 and PC3?', 'The serial interfaces of the routers are in different subnets.');
add('Which command will create a static route on R2 in order to reach PC B?', 'R1(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1');
add('Which problem is evident if the show ip interface command shows that the interface is down and the line protocol is down?', 'A cable has not been attached to the port.');
add('Which three values or sets of values are included when creating an extended access control list entry? (Choose three.)', 'access list number between 100 and 199', 'source address and wildcard mask', 'destination address and wildcard mask');
add('A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?', '0.0.1.255');
add('Which kind of message is sent by a DHCP client when its IP address lease has expired?', 'a DHCPREQUEST unicast message');
add('What happens immediately after two OSPF routers have exchanged hello packets and have formed a neighbor adjacency?', 'They exchange abbreviated lists of their LSDBs');
add('What benefit does NAT64 provide?', 'It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses.');
add('What is the purpose of setting the native VLAN separate from data VLANs?', 'A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANs');
add('Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?', 'ip address dhcp');
add('Which statement is correct about IPv6 routing?', 'IPv6 uses the link-local address of neighbors as the next-hop address for dynamic routes.');
add('A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?', 'ip route 172.16.32.0 255.255.224.0 S0/0/0 200');
add('Refer to the exhibit. How many broadcast and collision domains exist in the topology?', '5 broadcast domains and 10 collision domains');
add('Which two commands can be used to verify the content and placement of access control lists? (Choose two.)', 'show access-lists', 'show running-config');
add('Which type of traffic would most likely have problems when passing through a NAT device?', 'IPsec');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which keyword is displayed on the web browser?', 'Welldone!');
add('Refer to the exhibit. What summary static address would be configured on R1 to advertise to R3?', '192.168.0.0/22');
add('Fill in the blank. Static routes are configured by the use of the ” ip route” global configuration command.', 'ip route');
add('A network technician has been asked to secure all switches in the campus network. The security requirements are for each switch to automatically learn and add MAC addresses to both the address table and the running configuration. Which port security configuration will meet these requirements?', 'sticky secure MAC addresses');
add('Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? (Choose three.)', 'dynamic desirable – dynamic auto', 'dynamic desirable – dynamic desirable', 'dynamic desirable – trunk');
add('Fill in the blank. The OSPF Type 1 packet is the __hello___ packet.', 'hello');
add('Which value represents the “trustworthiness” of a route and is used to determine which route to install into the routing table when there are multiple routes toward the same destination?', 'administrative distance');
add('Which type of router memory temporarily stores the running configuration file and ARP table?', 'RAM');
add('Fill in the blank. The default administrative distance for a static route is ', '1');
add('Fill in the blank. Static routes are configured by the use of the global configuration command.', 'ip route');
add('Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?', 'Router R4 will become the DR and router R3 will become the BDR.');
add('What is the purpose of an access list that is created as part of configuring IP address translation?', 'The access list defines the private IP addresses that are to be translated.');
add('The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)', 'access-list 5 permit 10.7.0.0 0.0.0.31', 'access-class 5 in');
add('While analyzing log files, a network administrator notices reoccurring native VLAN mismatches. What is the effect of these reoccurring errors?', 'The control and management traffic on the error-occurring trunk port is being misdirected or dropped.');
add('Which two characteristics describe the native VLAN? (Choose two.)', 'The native VLAN provides a common identifier to both ends of a trunk.', 'The native VLAN traffic will be untagged across the trunk link.');
add('Refer to the exhibit. The Branch Router has an OSPF neighbor relationship with the HQ router over the 198.51.0.4/30 network. The 198.51.0.8/30 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/1/1 100 was issued on Branch and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?', 'Change the administrative distance to 120.');
add('Refer to the exhibit. An attacker on PC X sends a frame with two 802.1Q tags on it, one for VLAN 40 and another for VLAN 12. What will happen to this frame?', 'SW-A will remove both tags and forward the rest of the frame across the trunk link, where SW-B will forward the frame to hosts on VLAN 40.');
add('Which statement is true about the difference between OSPFv2 and OSPFv3?', 'OSPFv3 routers do not need to have matching subnets to form neighbor adjacencies.');
add('What are two ways of turning off DTP on a trunk link between switches? (Choose two.)', 'Configure attached switch ports with the nonegotiate command option.', 'Place the two attached switch ports in access mode.');
add('Why would an administrator use a network security auditing tool to flood the switch MAC address table with fictitious MAC addresses?', 'to determine which ports are not correctly configured to prevent MAC address flooding');
add(' A new network policy requires an ACL to deny HTTP access from all guests to a web server at the main office. All guests use addressing from the IPv6 subnet 2001:DB8:19:C::/64. The web server is configured with the address 2001:DB8:19:A::105/64. Implementing the NoWeb ACL on the interface for the guest LAN requires which three commands? (Choose three.)', 'deny tcp any host 2001:DB8:19:A::105 eq 80', 'permit ipv6 any any', '?');
add('An OSPF router has three directly connected networks; 172.16.0.0/16, 172.16.1.0/16, and 172.16.2.0/16. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?', 'router(config-router)# network 172.16.1.0 0.0.255.255 area 0');
add('Refer to the exhibit. Which type of route is 172.16.0.0/16?', 'level 1 parent route');
add('Refer to the exhibit. Which type of IPv6 static route is configured in the exhibit?', 'recursive static route');
add('Which subnet mask would be used as the classful mask for the IP address 192.135.250.27?', '255.255.255.0');
add('Which subnet mask would be used as the classful mask for the IP address 128.107.52.27?', '255.255.0.0');
add('Refer to the exhibit. A small business uses VLANs 8, 20, 25, and 30 on two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?', '5');
add('The buffers for packet processing and the running configuration file are temporarily stored in which type of router memory?', 'RAM');
add('A network technician is configuring port security on switches. The interfaces on the switches are configured in such a way that when a violation occurs, packets with unknown source address are dropped and no notification is sent. Which violation mode is configured on the interfaces?', 'protect');
add('A standard ACL has been configured on a router to allow only clients from the 10.11.110.0/24 network to telnet or to ssh to the VTY lines of the router. Which command will correctly apply this ACL?', 'access-group 11 in');
add('Refer to the exhibit. What address will summarize the LANs attached to routers 2-A and 3-A and can be configured in a summary static route to advertise them to an upstream neighbor?', '10.0.0.0/21');
add('A security specialist designs an ACL to deny access to a web server from all sales staff. The sales staff are assigned addressing from the IPv6 subnet 2001:db8:48:2c::/64. The web server is assigned the address 2001:db8:48:1c::50/64. Configuring the WebFilter ACL on the LAN interface for the sales staff will require which three commands? (Choose three.)', 'deny tcp host 2001:db8:48:1c::50 any eq 80', 'deny tcp any host 2001:db8:48:1c::50 eq 80', 'deny ipv6 any any');
add('To enable RIP routing for a specific subnet, the configuration command network 192.168.5.64 was entered by the network administrator. What address, if any, appears in the running configuration file to identify this network?', '192.168.5.0');
add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the interval web server from all teaching assistants has been implemented in the Board Office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implement the ACL, access to all servers is denied. What is the problem?', 'named ACLs requite the use of port numbers');
add('Refer to the exhibit. Assuming that the routing tables are up to date and no ARP messages are needed, after a packet leaves H1, how many times is the L2 header rewritten in the path to H2?', '2');
add('A router learns of multiple toward the same destination. Which value in a routing table represents the trustworthiness of learned routes and is used by the router to determine which route to install into the routing table for specific situation?', 'Metric');
add('What is the minimum configuration for a router interface that is participating in IPv6 routing', 'To have only a link-local IPv6 address');
add('Which two statements are true about half-duplex and full-duplex communications? (Choose two.)', 'Full duplex offers 100 percent potential use of the bandwidth.', 'Full duplex allows both ends to transmit and receive simultaneously.');
add(' Fill in the blank. The acronym describes the type of traffic that has strict QoS requirements and utilizes a one-way overall delay less than 150 ms across the network. __VoIP__', 'VoIP');
add('Which two commands should be implemented to return a Cisco 3560 trunk port to its default configuration? (Choose two.)', 'S1(config-if)# no switchport trunk allowed vlan', 'S1(config-if)# no switchport trunk native vlan');
add('Which command will enable auto-MDIX on a device?', 'S1(config-if)# mdix auto');
add('What is the effect of issuing the passive-interface default command on a router that is configured for OSPF?', 'It prevents OSPF messages from being sent out any OSPF-enabled interface.');
add('A network administrator is implementing a distance vector routing protocol between neighbors on the network. In the context of distance vector protocols, what is a neighbor?', 'routers that share a link and use the same routing protocol');
add('Refer to the exhibit. A network administrator has just configured address translation and is verifying the configuration. What three things can the administrator verify? (Choose three.', 'Address translation is working.', 'A standard access list numbered 1 was used as part of the configuration process.', 'Two types of NAT are enabled.');
add('Match the router memory type that provides the primary storage for the router feature. (Not all options are used.)', 'full operating system > flash', 'limited operating system > ROM', 'routing table > RAM', 'startup configuration file > NVRAM');
add('Which two methods can be used to provide secure management access to a Cisco switch? (Choose two.)', 'Configure specific ports for management traffic on a specific VLAN', 'Configure SSH for remote management.');
add('Refer to the exhibit. Which highlighted value represents a specific destination network in the routing table?', '10.16.100.128');
add('Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?', '3');
add('Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?', 'Source MAC: 00E0.FE91.7799', 'Source IP: 10.1.1.10');
add('Which network design may be recommended for a small campus site that consists of a single building with a few users?', 'a collapsed core network design');
add('Refer to the exhibit. A small business uses VLANs 2, 3, 4, and 5 between two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?', '5');
add('A router learns of multiple routes toward the same destination. Which value in a routing table represents the trustworthiness of learned routes and is used by the router to determine which route to install into the routing table for this specific situation?', 'administrative distance');
add('Which value in a routing table represents trustworthiness and is used by the router to determine which route to install into the routing table when there are multiple routes toward the same destination?', 'administrative distance');
add('The network address 172.18.9.128 with netmask 255.255.255.128 is matched by which wildcard mask?', '0.0.0.127');
add('Which three addresses could be used as the destination address for OSPFv3 messages? (Choose three.)', 'FF02::5', 'FF02::6', 'FE80::1');
add('Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?', '65');
//add('Refer to the exhibit. What is the OSPF cost to reach the R2 LAN 172.16.2.0/24 from R1?', '?');
//add('A network administrator is configuring port security on a Cisco switch. The company security policy specifies that when a violation occurs, packets with unknown source addresses should be dropped and no notification should be sent. Which violation mode should be configured on the interfaces?', '?');
add('A network administrator is configuring an ACL with the command access-list 10 permit 172.16.32.0 0.0.15.255. Which IPv4 address matches the ACE?', '172.16.47.254');
//add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)', '?');
//add('Refer to the exhibit. The network administrator needs as many switch ports as possible for end devices and the business is using the most common type of inter-VLAN method. What type of inter-VLAN interconnectivity is best to use between the switch and the router if R1 routes for all VLANs?', '?');
//add('A part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?', '?');
//add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the internal web server from all teaching assistants has been implemented in the Board office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implementing the ACL, access to all servers is denied. What is the problem?', '?');
add('Refer to the exhibit. A new network policy requires an ACL denying FTP and Telnet access to a Corp file server from all interns. The address of the file server is 172.16.1.15 and all interns are assigned addresses in the 172.18.200.0/24 network. After implementing the ACL, no one in the Corp network can access any of the servers. What is the problem?', 'Inbound ACLs must be routed before they are processed.', 'The ACL is implicitly denying access to all the servers.');
//add('A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?', '?');
add('Router R1 routes traffic to the 10.10.0.0/16 network using an EIGRP learned route from Branch2. The administrator would like to install a floating static route to create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2 goes down. Which static route meets this goal?', 'ip route 10.10.0.0 255.255.0.0 209.165.200.225 100');
add('Which highlighted value represents a specific destination network in the routing table?', '172.16.100.64');
//add('which type of traffic is designed for a native VLAN?', '?');
add('Which two statements are correct if a configured NTP master on a network cannot reach any clock with a lower stratum number?', 'The NTP master will claim to be synchronized at the configured stratum number.', 'Other systems will be willing to synchronize to that master using NTP.');
add('A network engineer has created a standard ACL to control SSH access to a router. Which command will apply the ACL to the VTY lines?', 'access-class 11 in');
add('A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)', 'loopback address', 'default VLAN', 'IP address');
add('A network administrator configures a router to provide stateful DHCPv6 operation. However, users report that workstations do not receive IPv6 addresses within the scope. Which configuration command should be checked to ensure that statefull DHCPv6 is implemented?', 'The dns-server line is included in the ipv6 dhcp pool section.');
//add('Which characteristic describes cut-through switching?', '?');
//112
add('Refer to the exhibit. A company has an internal network of 172.16.25.0/24 for their employee workstations and a DMZ network of 172.16.12.0/24 to host servers. The company uses NAT when inside hosts connect to outside network. A network administrator issues the show ip nat translations command to check the NAT configurations. Which one of source IPv4 addresses is translated by R1 with PAT?', '172.16.25.35');

add('Refer to the exhibit. What is the OSPF cost to reach the R2 LAN 172.16.2.0/24 from R1?', '65');
//113
add('A network administrator is configuring port security on a Cisco switch. The company security policy specifies that when a violation occurs, packets with unknown source addresses should be dropped and no notification should be sent. Which violation mode should be configured on the interfaces?', 'restrict');
//115
add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)', 'mismatched OSPF Hello or Dead timers', 'mismatched subnet masks on the link interfaces');
//116
add('Refer to the exhibit. The network administrator needs as many switch ports as possible for end devices and the business is using the most common type of inter-VLAN method. What type of inter-VLAN interconnectivity is best to use between the switch and the router if R1 routes for all VLANs?', 'one link between the switch and the router with the one switch port being configured in access mode');
//117
add('A part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?', 'sticky secure MAC addresses');
//118
add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the internal web server from all teaching assistants has been implemented in the Board office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implementing the ACL, access to all servers is denied. What is the problem?', 'named ACLs requite the use of port numbers');
//120
add('A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?', 'sticky secure MAC addresses');
//123
add('which type of traffic is designed for a native VLAN?', 'untagged');
//128
add('Which characteristic describes cut-through switching?', 'Error-free fragments are forwarded, so switching accurs with lower latency.');
/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

/*
 * template:
 * add('helper label');
 */
