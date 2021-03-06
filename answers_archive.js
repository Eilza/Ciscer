/*TEST 2*/
add('Refer to the exhibit. A switch was configured as shown. A ping to the default gateway was issued, but the ping was not successful. Other switches in the same network can ping this gateway. What is a possible reason for this?',
    'The no shutdown command was not issued for VLAN 1.');
add('While trying to solve a network issue, a technician made multiple changes to the current router configuration file. The changes did not solve the problem and were not saved. What action can the technician take to discard the changes and work with the file in NVRAM?',
    'Issue the reload command without saving the running configuration.');
add('Why is it important to configure a hostname on a device?',
    'to identify the device during remote access (SSH or telnet)');
add('Which procedure is used to access a Cisco 2960 switch when performing an initial configuration in a secure environment?',
    'Use the console port to locally access the switch from a serial or USB interface of the PC.');
add('What criterion must be followed in the design of an IPv4 addressing scheme for end devices?',
    'Each IP address must be unique within the local network.');
add('A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?',
    'SSH');
add('Which interface allows remote management of a Layer 2 switch?',
    'the switch virtual interface');
add('What is a result of using the service password-encryption command on a Cisco network device?',
    'All passwords in the configuration are not shown in clear text when viewing the configuration.');
add('Match the definitions to their respective CLI hot keys and shortcuts.',
    'Tab -> Completes abbreviated commands and parameters' +
    '<br>Ctrl-R -> returns directly to the privileged EXEC mode' +
    '<br>Up Arrow -> scrolls backwards through previously entered commands' +
    '<br>Ctrl-Z -> cancels any command currently being entered and returns directly to privileged EXEC mode' +
    '<br>Ctrl-C -> Redisplays, on a new line, the command currently being typed' +
    '<br>Other answer.' +
    '<br>The shortcuts with their functions are as follows:' +
    '<br>Tab –> Completes the remainder of a partially typed command or keyword' +
    '<br>Space bar –> displays the next screen' +
    '<br>? –> provides context-sensitive help' +
    '<br>Up Arrow –> Allows user to scroll backward through former commands' +
    '<br>Ctrl-C –> cancels any command currently being entered and returns directly to privileged EXEC mode' +
    '<br>Ctrl-Shift-6 –> Allows the user to interrupt an IOS process such as ping or traceroute');
add('A network administrator is planning an IOS upgrade on several of the head office routers and switches. Which three questions must be answered before continuing with the IOS selection and upgrade? (Choose three.)',
    'What models of routers and switches require upgrades?',
    'Do the routers and switches have enough RAM and flash memory for the proposed IOS versions?',
    'What features are required for the devices?');
add('What benefit does DHCP provide to a network?',
    'Hosts can connect to the network and get an IP address without manual configuration.');
add('Which two functions are provided to users by the context-sensitive help feature of the Cisco IOS CLI? (Choose two.)',
    'displaying a list of all available commands within the current mode',
    'determining which option, keyword, or argument is available for the entered command ');
add('A router has a valid operating system and a configuration stored in NVRAM. When the router boots up, which mode will display?',
    'user EXEC mode');
add('Which two features are characteristics of flash memory? (Choose two.)',
    'Flash provides nonvolatile storage',
    'The contents of flash may be overwritten');
add('Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)',
    'privileged EXEC mode' +
    '<br>VTY interface' +
    '<br>console interface');
add('Why would a Layer 2 switch need an IP address?',
    'to enable the switch to be managed remotely');
add('What is a user trying to determine when issuing a ping 10.1.1.1 command on a PC?',
    'if there is connectivity with the destination device');
add('What command can be used on a Windows PC to see the IP configuration of that computer?',
    'ipconfig');
add('Which statement is true about the running configuration file in a Cisco IOS device?',
    'It affects the operation of the device immediately when modified.');
add('Which two characters are allowed as part of the hostname of a Cisco device? (Choose two.)',
    'numbers' +
    '<br>underline');
add('A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?',
    'Exit enable mode and press Enter.' +
    '<br>Exit privileged EXEC mode and press Enter.');
add('Which two characters are allowed as part of the hostname of a Cisco device? (Choose two.)',
    'dash' +
    '<br>numbers');

/*TEST 3*/
add('Which PDU format is used when bits are received from the network medium by the NIC of a host?',
    'frame');
add('A user sends an HTTP request to a web server on a remote network. During encapsulation for this request, what information is added to the address field of a frame to indicate the destination?',
    'the MAC address of the default gateway');
add('What is a benefit of using a layered model for network communications?',
    'fostering competition among device and software vendors by enforcing the compatibility of their products');
add('What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?',
    'flow control');
add('A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?',
    'HTTP, TCP, IP, Ethernet');
add('Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?',
    'Segments are sent from the transport layer to the internet layer.');
add('Which protocol is responsible for controlling the size and rate of the HTTP messages exchanged between server and client?',
    'TCP');
add('Launch PT Hide and Save PT. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Based on the configured network, what IP address would PC1 and PC2 use as their default gateway?',
    '192.168.1.1');
add('A computer in a given network is communicating with a specific group of computers. What type of communication is this?',
    'multicast');
add('What is a function of Layer 4 of the OSI model?',
    'to describe the ordered and reliable delivery of data between source and destination');
add('What is an advantage of network devices using open standard protocols?',
    'A client host and a server running different operating systems can successfully exchange data.');
add('Which IEEE standard enables a wireless NIC to connect to a wireless AP that is made by a different manufacturer?',
    '802.11');
add('If the default gateway is configured incorrectly on the host, what is the impact on communications?',
    'The host can communicate with other hosts on the local network, but is unable to communicate with hosts on remote networks.');
add('What statement describes the function of the Address Resolution Protocol?',
    'ARP is used to discover the MAC address of any host on the local network.');
add('At which layer of the OSI model would a logical address be encapsulated?',
    'network layer');
add('What is the general term that is used to describe a piece of data at any layer of a networking model?',
    'protocol data unit');
add('Which statement is true about the TCP/IP and OSI models?​',
    'The TCP/IP transport layer and OSI Layer 4 provide similar services and functions.');
add('Which address provides a unique host address for data communications at the internet layer?',
    'logical address');
add('A user is viewing an HTML document located on a web server. What protocol segments the messages and manages the segments in the individual conversation between the web server and the web client?',
    'TCP');
add('Which address does a NIC use when deciding whether to accept a frame?',
    'destination MAC address');
add('What are proprietary protocols?',
    'protocols developed by organizations who have control over their definition and operation');
add('Which protocol is used by a computer to find the MAC address of the default gateway on an Ethernet network?',
    'ARP');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?',
    '?(new question)');
add('Which command is used to remove only VLAN 20 from a switch?',
    'no vlan 20');

/*TEST 4*/
add('What are two reasons for physical layer protocols to use frame encoding techniques? (Choose two.)',
    'to identify where the frame starts and ends<br>to distinguish data bits from control bits');
add('Which statement is correct about multimode fiber?',
    'SC-SC patch cords are used with multimode fiber cables.');
add('Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?',
    'data link');
add('The throughput of a FastEthernet network is 80 Mb/s. The traffic overhead for establishing sessions, acknowledgments, and encapsulation is 15 Mb/s for the same time period. What is the goodput for this network?',
    '65 Mb/s');
add('A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)',
    'RFI​, EMI');
add('What is the purpose of the FCS field in a frame?',
    'to determine if errors occurred in the transmission and reception');
add('As data travels on the media in a stream of 1s and 0s how does a receiving node identify the beginning and end of a frame?​',
    'The transmitting node inserts start and stop bits into the frame.');
add('Which statement describes signaling at the physical layer?',
    'Sending the signals asynchronously means that they are transmitted without a clock signal.');
add('A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)',
    'coverage area<br>interference<br>security');
add('What is one main characteristic of the data link layer?',
    'It shields the upper layer protocol from being aware of the physical medium to be used in the communication.');
add('What is one advantage of using fiber optic cabling rather than copper cabling?',
    'It is able to carry signals much farther than copper cabling.');
add('What acronym is used to reference the data link sublayer that identifies the network layer protocol encapsulated in the frame?',
    'LLC');
add('Why are two strands of fiber used for a single fiber optic connection?',
    'They allow for full-duplex connectivity.');
add('Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​',
    '1 – rollover, 2 – straight-through, 3 – crossover');
add('What is true concerning physical and logical topologies?',
    'Logical topologies determine the media access control method used.');
add('The term “Bandwidth” indicates the capacity of a medium to carry data and it is typically measured in kilobits per second (kb/s) or megabits per second (Mb/s).',
    'Bandwidth');
add('Refer to the exhibit. What is wrong with the displayed termination?',
    'The untwisted length of each wire is too long.');
add('10,000,000,000 b/s can also be written as “10” Gb/s.',
    '10');
add('What are two characteristics of 802.11 wireless networks? (Choose two.)',
    'Collisions can exist in the networks.<br>They use CSMA/CA technology.');
add('A network administrator is required to upgrade wireless access to end users in a building. To provide data rates up to 1.3 Gb/s and still be backward compatible with older devices, which wireless standard should be implemented?',
    '802.11ac');
add('How is the magnetic field cancellation effect enhanced in UTP cables?',
    'by increasing and varying the number of twists in each wire pair');
add('The physical layer encodes the frames',
    'Step 1');
add('The physical layer creates the signals that represent the bits in each frame',
    'Step 2');
add('The signals are sent on the media one at a time.',
    'Step 3');
add('The physical layer retrieves the individual signals from the media',
    'Step 4');
add('The physical layer restores the individual signals to their bit representations',
    'Step 5');
add('The physical layer passes the packets up to the internet layer.',
    'Без соответствия');
/*TEST 5*/
add('cut-through',
    'has low latency',
    'may forward runt frames',
    'begins forwarding when the destination address is received');
add('store-and-forward',
    'always stores the entire frame' +
    '<br>checks the CRC before forwarding' +
    '<br>checks the frame length before forwarding');
add('A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?',
    'It will send an ARP request for the MAC address of the default gateway.');
add('Which address or combination of addresses does a Layer 3 switch use to make forwarding decisions?',
    'MAC and IP addresses');
add('What are two potential network problems that can result from ARP operation? (Choose two.)',
    'On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.',
    'Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.');
add('Launch PT Hide and Save PT' +
    'Open the PT Activity. Perform the tasks in the activity instruction and then answer the question.' +
    'What destination address will PC1 include in the destination address field of the Ethernet frame that it sends to PC2?',
    '0030.a3e5.0401');
add('How does adding an Ethernet line card affect the form factor of a switch?',
    'by expanding the port density');
add('Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)',
    'Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another',
    'Destination IP addresses in a packet header remain constant along the entire path to a target host');
add('What is the Layer 2 multicast MAC address that corresponds to the Layer 3 IPv4 multicast address 224.139.34.56?',
    '01-00-5E-0B-22-38');
add('What is the purpose of the preamble in an Ethernet frame?',
    'is used for timing synchronization');
add('A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?',
    'shared memory buffering');
add('A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)',
    'The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable',
    'The link between switches will work as full-duplex',
    'The link between the switches will work at the fastest speed that is supported by both switches');
add('Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?​',
    'PC2 will send an ARP reply with its MAC address.');
add('What is a characteristic of a contention-based access method?',
    'It is a nondeterministic method.');
add('What statement illustrates a drawback of the CSMA/CD access method?',
    'Collisions can decrease network performance.');
add('When would a switch record multiple entries for a single switch port in its MAC address table?',
    'when another switch is connected to the switch port');
add('Which two statements describe a fixed configuration Ethernet switch? (Choose two.)',
    'A fixed configuration switch may be stackable.',
    'The number of ports on the switch cannot be increased.');
add('Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)',
    'Logical link control is implemented in software.',
    'The data link layer uses LLC to communicate with the upper layers of the protocol suite.');
add('A network administrator issues the following commands on a Layer 3 switch:' +
    '<br>DLS1(config)# interface f0/3' +
    '<br>DLS1(config-if)# no switchport' +
    '<br>DLS1(config-if)# ip address 172.16.0.1 255.255.255.0' +
    '<br>DLS1(config-if)# no shutdown' +
    '<br>DLS1(config-if)# end' +
    '<br>What is the administrator configuring?',
    'a routed port');
add('Which statement is true about MAC addresses?',
    'The first three bytes are used by the vendor assigned OUI');
add('Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?',
    'The switch will forward the frame to all ports except port 4.');
add('The binary number 0000 1010 can be expressed as “A” in hexadecimal.',
    'A');
add('What are two features of ARP? (Choose two.)',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.',
    'If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('Start Frame Delimiter',
    'Field 2');
add('Source MAC Address',
    'Field 4');
add('Encapsulated Data',
    'Field 6');
add('Flag',
    'Нет соответствия');
add('Preamble',
    'Beginning of frame - Field 1');
add('Destination MAC Address',
    'Field 3');
add('Length/Type',
    'Field 5');
add('Frame Check Sequence',
    'End of frame - Field 7');
add('Session ID',
    'Нет соответсвия');

//TEST 6
add('After troubleshooting a router, the network administrator wants to save the router configuration so that it will be used automatically the next time that the router reboots. What command should be issued?',
    'copy running-config startup-config');
add('Which IPv4 header field is responsible for defining the priority of the packet?',
    'differentiated services');
add('When connectionless protocols are implemented at the lower layers of the OSI model, what are usually used to acknowledge the data receipt and request the retransmission of missing data?',
    'upper-layer connection-oriented protocols');
add('Why is NAT not needed in IPv6?​',
    'Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large');
add('Refer to the exhibit. Fill in the blank. A packet leaving PC-1 has to traverse “three” hops to reach PC-4.​',
    'three');
add('Which two interfaces will allow access via the VTY lines to configure the router? (Choose two.)',
    'WAN interfaces',
    'LAN interfaces');
add('A technician is manually configuring a computer with the necessary IP parameters to communicate over the corporate network. The computer already has an IP address, a subnet mask, and a DNS server. What else has to be configured for Internet access?',
    'the default gateway address');
add('Which three commands are used to set up a password for a person who attaches a cable to a new router so that an initial configuration can be performed? (Choose three.)',
    'password cisco',
    'line console 0',
    'login');
add('Which statement about router interfaces is true?',
    'A configured and activated router interface must be connected to another device in order to operate');
add('A technician is configuring a router that is actively running on the network. Suddenly, power to the router is lost. If the technician has not saved the configuration, which two types of information will be lost? (Choose two.)',
    'routing table',
    'ARP cache');
add('How do hosts ensure that their packets are directed to the correct network destination?',
    'They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route');
add('What is a service provided by the Flow Label field of the IPv6 header?',
    'It informs network devices to maintain the same path for real-time application packets');
add('During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?',
    'switch the packet to the directly connected interface');
add('In a router, “ROM ” is the nonvolatile memory where the diagnostic software, the bootup instructions, and a limited IOS are stored.',
    'ROM');
add('Which two commands can be used on a Windows host to display the routing table? (Choose two.)',
    'route print',
    'netstat -r');
add('A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?',
    'The packet will be sent directly to the destination host');
add('Which command displays a summary chart of all router interfaces, their IP addresses, and their current operational status?',
    'show ip interface brief');
add('Which two files, if found, are copied into RAM as a router with the default configuration register setting boots up? (Choose two.)',
    'startup configuration',
    'IOS image file');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question or complete the task. Does the router have enough RAM and flash memory to support the new IOS?',
    'The router has enough RAM and flash memory for the IOS upgrade');
add('When would the Cisco IOS image held in ROM be used to boot the router?',
    'when the full IOS cannot be found');
add('Which type of static route that is configured on a router uses only the exit interface?',
    'directly connected static route');

//TEST 7
add('A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?',
    '10 segments');
add('A host device needs to send a large video file across the network while providing data communication to other users. Which feature will allow different communication streams to occur at the same time, without having a single data stream using all available bandwidth?',
    'multiplexing');
add('A technician wishes to use TFTP to transfer a large file from a file server to a remote router. Which statement is correct about this scenario?',
    'The file is segmented and then reassembled in the correct order at the destination, if necessary, by the upper-layer protocol.');
add('Which scenario describes a function provided by the transport layer?',
    'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window');
add('Which transport layer feature is used to guarantee session establishment?',
    'TCP 3-way handshake');
add('What is the complete range of TCP and UDP well-known ports?',
    '0 to 1023');
add('Which two TCP header fields are used to confirm receipt of data?',
    'acknowledgment number',
    'sequence number');
add('What is a beneficial feature of the UDP transport protocol?',
    'fewer delays in transmission');
add('Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? (Choose two.)',
    'SYN',
    'ACK');
add('What happens if the first packet of a TFTP transfer is lost?',
    'The TFTP application will retry the request if a reply is not received.');
add('Compared to UDP, what factor causes additional network overhead for TCP communication?',
    'network traffic that is caused by retransmissions');
add('Which factor determines TCP window size?',
    'the amount of data the destination can process at one time');
add('During a TCP session, a destination device sends an acknowledgment number to the source device. What does the acknowledgment number represent?',
    'the next byte that the destination expects to receive');
add('What is a socket?',
    'the combination of a source IP address and port number or a destination IP address and port number');
add('During a TCP session, the    “SYN”   field is used by the client to request communication with the server.',
    'SYN');
add('A total of 4 messages are exchanged during the TCP session termination process between the client and the server.',
    '4');
add('A host device sends a data packet to a web server via the HTTP protocol. What is used by the transport layer to pass the data stream to the proper application on the server?',
    'destination port number');
add('What does a client do when it has UDP datagrams to send?',
    'It just sends the datagrams');
add('What does a client application select for a TCP or UDP source port number?',
    'a random value in the range of the registered ports');


//TEST 8
add('The decimal equivalent of the binary number 10010101 is    “149” ',
    '149');
add('What is indicated by a successful ping to the ::1 IPv6 address?',
    'IP is properly installed on the host');
add('Launch PT – Hide and Save PT Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.Which message is displayed on the web server?',
    'Correct configuration!');
add('Which two ICMP messages are used by both IPv4 and IPv6 protocols? (Choose two.)​',
    'protocol unreachable',
    'route redirection');
add('A message is sent to all hosts on a remote network. Which type of message is it?',
    'directed broadcast');
add('Which two things can be determined by using the ping command? (Choose two.)',
    'the average time it takes a packet to reach the destination and for the response to return to the source',
    'whether or not the destination device is reachable through the network');
add('A DHCP server is used to assign IP addresses dynamically to the hosts on a network. The address pool is configured with 192.168.10.0/24. There are 3 printers on this network that need to use reserved static IP addresses from the pool. How many IP addresses in the pool are left to be assigned to other hosts?',
    '251');
add('Which two parts are components of an IPv4 address? (Choose two.)',
    'network portion',
    'host portion');
add('Which IPv6 address is most compressed for the full FE80:0:0:0:2AA:FF:FE9A:4CA3 address?​',
    'FE80::2AA:FF:FE9A:4CA3');
add('What are three parts of an IPv6 global unicast address? (Choose three.)',
    'an interface ID that is used to identify the local host on the network',
    'a subnet ID that is used to identify networks inside of the local enterprise site',
    'a global routing prefix that is used to identify the network portion of the address that has been provided by an ISP');
add('Which network migration technique encapsulates IPv6 packets inside IPv4 packets to carry them over IPv4 network infrastructures?',
    'tunneling');
add('When an IPv6 enabled host needs to discover the MAC address of an intended IPv6 destination, which destination address is used by the source host in the NS message?',
    'solicited-node multicast address');
add('When a Cisco router is being moved from an IPv4 network to a complete IPv6 environment, which series of commands would correctly enable IPv6 forwarding and interface addressing?',
    'Router(config-if)# ipv6 address 2001:db8:bced:1::9/64',
    '6 строк');
add('What two statements describe characteristics of Layer 3 broadcasts? (Choose two.)',
    'Routers create broadcast domains.',
    'A limited broadcast packet has a destination IP address of 255.255.255.255.');
add('Which two statements are correct about IPv4 and IPv6 addresses? (Choose two.)',
    'IPv6 addresses are represented by hexadecimal numbers.',
    'IPv4 addresses are 32 bits in length.');
add('What is the prefix length notation for the subnet mask 255.255.255.224?',
    '/27');
add('What is the decimal equivalent of the hex number 0x3F? “63”',
    '63');
add('What are two types of IPv6 unicast addresses? (Choose two.)',
    'link-local',
    'loopback');
add('When will a router drop a traceroute packet?',
    'when the value in the TTL field reaches zero');
add('An IPv6 enabled device sends a data packet with the destination address of FF02::1. What is the target of this packet?',
    'all IPv6 enabled nodes on the local link');
add('How many bits are in an IPv4 address?',
    '32');


//TEST 9

add('How many broadcast domains are there?',
    '4');
add('How many usable host addresses are there in the subnet 192.168.1.32/27?',
    '30');
add('How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?',
    '1022');
add('A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many host addresses will this subnet provide?​',
    '6');
add('A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?',
    '255.255.255.128');
add('The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?',
    'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?',
    'three');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27',
    '192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
    '/25');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many addresses are wasted in total by subnetting each network with a subnet mask of 255.255.255.224?',
    '72');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?',
    '72');
add('When developing an IP addressing scheme for an enterprise network, which devices are recommended to be grouped into their own subnet or logical addressing group?',
    'hosts accessible from the Internet');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.',
    'It reduces the burden on network support staff.');
add('A computer that is configured with the IPv6 address as shown in the exhibit is unable to access the internet. What is the problem?',
    'The gateway address is in the wrong subnet.');
add('When subnetting a /64 IPv6 network prefix, which is the preferred new prefix?',
    '/72');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A::0');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
    '/64',
    '/68');
add('In dotted decimal notation, the IP address      “172.25.0.126”     is the last host address for the network 172.25.0.64/26.',
    '172.25.0.126');
add('In dotted decimal notation, the subnet mask      “255.255.254.0”     will accommodate 500 hosts per subnet.',
    '255.255.254.0');
add('Consider the following range of addresses:2001:0DB8:BC15:00A0:0000::    2001:0DB8:BC15:00A1:0000::    2001:0DB8:BC15:00A2:0000::…2001:0DB8:BC15:00AF:0000::    The prefix for the range of addresses is   “60”',
    '60');
add('A nibble consists of    “4”    bits.',
    '4');
add('What issue is causing Host A to be unable to communicate with Host B?',
    'Host A and host B are on overlapping subnets.');
add('Refer to the exhibit. What is the result of adding the established argument to the end of the ACE?',
    'Any IP traffic is allowed to reach the 192.168.254.0 255.255.254.0 network as long as it is in response to an originated request.');
add('Refer to the exhibit. What will happen to the access list 10 ACEs if the router is rebooted before any other commands are implemented?',
    'The ACEs of access list 10 will be renumbered.');
add('What method is used to apply an IPv6 ACL to a router interface?',
    'the use of the ipv6 traffic-filter command');
add('What is a limitation when utilizing both IPv4 and IPv6 ACLs on a router?',
    'Both IPv4 and IPv6 ACLs can be configured on a single device, but cannot share the same name.');
add('What single access list statement matches all of the following networks?',
    'access-list 10 permit 192.168.16.0 0.0.3.255');
add('In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?',
    'when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface');
add('What packets would match the access control list statement that is shown below?',
    'SSH traffic from the 172.16.0.0 network to any destination network');


//Test 10
add('Which three layers of the OSI model provide similar network services to those provided by the application layer of the TCP/IP model? (Choose three.)',
    'session layer',
    'application layer',
    'presentation layer');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
    'compression',
    'encryption');
add('Select three protocols that operate at the Application Layer of the OSI model.',
    'FTP',
    'POP3',
    'DHCP');
add('A manufacturing company subscribes to certain hosted services from their ISP. The services required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)',
    'FTP',
    'HTTP',
    'SMTP');
add('What are two characteristics of peer-to-peer networks? (Choose two.)',
    'decentralized resources',
    'resource sharing without a dedicated server');
add('What is an example of network communication that uses the client-server model?',
    'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('What is an advantage for small organizations of adopting IMAP instead of POP?',
    'Messages are kept in the mail servers until the client manually deletes them.');
add('Which two actions are taken by SMTP if the destination email server is busy when email messages are sent? (Choose two.)',
    'SMTP tries to send the messages at a later time.',
    'SMTP periodically checks the queue for messages and attempts to send them again.');
add('Which application layer protocol uses message types such as GET, PUT, and POST?',
    'HTTP');
add('A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)',
    'DHCPDISCOVER',
    'DHCPREQUEST');
add('A user accessed the game site www.nogamename.com last week. The night before the user accesses the game site again, the site administrator changes the site IP address. What will be the consequence of that action for the user?',
    'The user will access the site without problems.');
add('Which DNS server in the DNS hierarchy would be considered authoritative for the domain name records of a company named netacad?',
    'netacad.com');
add('Which three statements describe a DHCP Discover message? (Choose three.)',
    'The destination IP address is 255.255.255.255.',
    'The message comes from a client seeking an IP address.',
    'All hosts receive the message, but only a DHCP server replies.');
add('Which phrase describes an FTP daemon?',
    'a program that is running on an FTP server');
add('What is true about the Server Message Block protocol?',
    'Clients establish a long term connection to servers.');
add('When would it be more efficient to use SMB to transfer files instead of FTP?',
    'when downloading large numbers of files from the same server');
add('Fill in the blank. What is the acronym for the protocol that is used when securely communicating with a web server?',
    'HTTPS');
add('Fill in the blank.Refer to the exhibit. What command was used to resolve  a given host name by querying the name servers?   “ nslookup ”',
    'nslookup');
add('Perform the tasks in the activity instructions and then answer the question. Which PC or PCs are sending FTP packets to the server?',
    'PC_2');


//Test 11
add('Which two statements about a service set identifier (SSID) are true? (Choose two.)',
    'all wireless devices on the same WLAN must have the same SSID',
    'tells a wireless device to which WLAN it belongs');
add('Which type of network attack involves the disabling or corruption of networks, systems, or services?',
    'denial of service attacks');
add('Which command will backup the configuration that is stored in NVRAM to a TFTP server?',
    'copy startup-config tftp');
add('Open the PT Activity. How long will a user be blocked if the user exceeds the maximum allowed number of unsuccessful login attempts?',
    '3 minutes');
add('Fill in the blank. Do not use abbreviations. The ”   show version      ” command that is issued on a router is used to verify the value of the software configuration register.',
    'show version');
add('What is a security feature of using NAT on a network?',
    'allows internal IP addresses to be concealed from external users');
add('A network administrator has determined that various computers on the network are infected with a worm. Which sequence of steps should be followed to mitigate the worm attack?',
    'containment, inoculation, quarantine, and treatment');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
    'WPA');
add('Refer to the exhibit. Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?',
    'Something is causing a time delay between the networks.');
add('When should an administrator establish a network baseline?',
    'at regular intervals over a period of time');
add('A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?',
    'The network administrator wants to verify Layer 2 connectivity.');
add('Which statement is true about CDP on a Cisco device?',
    'CDP can be disabled globally or on a specific interface.');
add('What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?',
    'to list the content of the NVRAM');
add('A network administrator checks the security log and notices there was unauthorized access to an internal file server over the weekend. Upon further investigation of the file system log, the administrator notices several important documents were copied to a host located outside of the company. What kind of threat is represented in this scenario?',
    'information theft');
add('If a configuration file is saved to a USB flash drive attached to a router, what must be done by the network administrator before the file can be used on the router?',
    'Edit the configuration file with a text editor.');
add('Which network design consideration would be more important to a large corporation than to a small business?',
    'redundancy');
add('Which protocol supports rapid delivery of streaming media?',
    'RTP');
add('Refer to the exhibit. An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?',
    'R1');
add('Which two statements characterize wireless network security? (Choose two.)',
    'Using the default IP address on an access point makes hacking easier.',
    'With SSID broadcast disabled, an attacker must know the SSID to connect.');
add('Which two actions can be taken to prevent a successful attack on an email server account? (Choose two.)',
    'Never send the password through the network in a clear text.',
    'Limit the number of unsuccessful attempts to log in to the server.');
add('How should traffic flow be captured in order to best understand traffic patterns in a network?',
    'during peak utilization times');
add('What do WLANs that conform to IEEE 802.11 standards allow wireless user to do?',
    'connect wireless hosts to hosts or services on a wired Ethernet network');
add('Fill in the blank.”   VoIP   ” defines the protocols and technologies that implement the transmission of voice data over an IP network.',
    'VoIP');
add('Fill in the blank. Do not use abbreviations. The show    ”  file systems ”    command provides information about the amount of available and free flash memory and its permissions for reading or writing data.',
    'file systems');

//Final Exam

add('Which communication tool allows real-time collaboration?',
    'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals',
    'applying security settings to control the flow of data',
    'notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
    'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
    'WAN');
add('Refer to the exhibit. From which location did this router load the IOS? ',
    'flash memory');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
    'an SSH connection');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
    'The administrator must first enter privileged EXEC mode before issuing the command.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
    'to interrupt the ping process');
add('What function does pressing the Tab key have when entering a command in IOS?',
    'It completes the remainder of a partially typed word in a command.');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
    'Switch(config)#?');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
    'linevtyin');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. Which action will be successful?',
    'PC2 can send a ping to 192.168.1.1');
add('Which IPv4 address can be pinged to test the internal TCP/IP operation of a host?',
    '127.0.0.1');
add('What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)',
    'DHCP',
    'DNS',
    'FTP');
add('Which two protocols function at the internet layer? (Choose two.)',
    'ICMP',
    'IP');
add('Which publicly available resources describe protocols, processes, and technologies for the Internet but do not give implementation details?',
    'Request for Comments');
add('Which address on a PC does not change, even if the PC is moved to a different network?',
    'MAC address');
add('What is the protocol that is used to discover a physical address from a known logical address and what message type does it use?',
    'ARP, broadcast');
add('What will happen if the default gateway address is incorrectly configured on a host?',
    'The host cannot communicate with hosts in other networks.');
add('What is an important function of the physical layer of the OSI model?',
    'It encodes frames into electrical, optical, or radio wave signals.');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
    'twisting opposing circuit wire pairs together');
add('Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)',
    'Fiber-optic cabling does not conduct electricity.',
    'Fiber-optic cabling is primarily used as backbone cabling.');
add('What is contained in the trailer of a data-link frame?',
    'error detection');
add('What is the auto-MDIX feature on a switch?',
    'crossover Ethernet cable connection');
add('Refer to the exhibit. A ping to PC3 is issued from PC0, PC1, and PC2 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
    'just PC0 and PC1 MAC addresses');
add('How does a Layer 3 switch differ from a Layer 2 switch?',
    'An IP address can be assigned to a physical port of a Layer 3 switch. However, this is not supported in Layer 2 switches.');
add('What is the purpose of the routing process?',
    'to select the paths that are used to direct traffic to destination networks');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
    'NAT');
add('Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?',
    'It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.');
add('Which of the following are primary functions of a router? (Choose two.)',
    'packet switching',
    'path selection');
add('Which two statements correctly describe a router memory type and its contents? (Choose two.)',
    'RAM is volatile and stores the running configuration.',
    'ROM is nonvolatile and stores bootup information.');
add('In which default order will a router search for startup configuration information?',
    'NVRAM, TFTP, setup mode');
add('What happens when part of an Internet VoIP transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which three IP addresses are private ? (Choose three.)',
    '10.172.168.1',
    '172.20.4.4',
    '192.168.5.254');
add('How many bits make up the single IPv6 hextet :10CD:?',
    '16');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
    'to enable the router as an IPv6 router');
add('Which group of IPv6 addresses cannot be allocated as a host source address?',
    'FF00::/8');
add('What is the purpose of ICMP messages?',
    'to provide feedback of IP packet transmissions');
add('Refer to the exhibit. A technician has configured a user workstation with the IP address and default subnet masks that are shown. Although the user can access all local LAN resources, the user cannot access any Internet sites by using either FQDN or IP addresses. Based upon the exhibit, what could account for this failure?',
    'The default gateway address in incorrect.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
    '192.168.1.64/26');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Refer to the exhibit. Which IP addressing scheme should be changed?',
    'Site 2');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
    '/64',
    '/68');
add('A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? (Choose two.)',
    'DHCPDISCOVER',
    'DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
    'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
    'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('Refer to the exhibit. The network administrator enters these commands into the R1 router:R1# copy running-config tftpAddress or name of remote host [ ]?    When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
    '192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? (Choose two.)',
    'broadcast SSID',
    'default administrator password');
add('Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('Fill in the blank.TFTP       is a best-effort, connectionless application layer protocol that is used to transfer files.',
    'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? (Choose two.)',
    'wireless NIC',
    'wireless client software');
add('Consider the following range of addresses:2001:0DB8:BC15:00A0:0000::    2001:0DB8:BC15:00A1:0000::    2001:0DB8:BC15:00A2:0000::…2001:0DB8:BC15:00AF:0000:: The prefix-length for the range of addresses is /60',
    '/60');
add('A host is accessing an FTP server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals',
    'applying security settings to control the flow of data',
    'notifying other devices when errors occur');
add('When is a dial-up connection used to connect to an ISP?',
    'when a regular telephone line is used');
add('On a school network, students are surfing the web, searching the library database, and attending an audio conference with their sister school in Japan. If network traffic is prioritized with QoS, how will the traffic be classified from highest priority to lowest priority?',
    'audio conference, database, HTTP');
add('During normal operation, from which location do most Cisco routers run the IOS?',
    'RAM');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
    'an SSH connection');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
    'Ctrl-Shift-6');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
    'Switch(config)#?');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
    'VLAN 1');
add('A technician uses the ping 127.0.0.1 command. What is the technician testing?',
    'the TCP/IP stack on a network host');
add('Which device should be used for enabling a host to communicate with another host on a different network?',
    'router');
add('A network technician is measuring the transfer of bits across the company backbone for a mission critical application. The technician notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
    'the amount of traffic that is currently crossing the network',
    'the type of traffic that is crossing the network',
    'the latency that is created by the number of network devices that the data is crossing');
add('Which characteristics describe fiber optic cable? (Choose two.)',
    'It is not affected by EMI or RFI.',
    'It is the most expensive type of LAN cabling');
add('What are two features of a physical, star network topology? (Choose two.)',
    'It is straightforward to troubleshoot.',
    'It is easy to add and remove end devices.');
add('A frame is transmitted from one networking device to another. Why does the receiving device check the FCS field in the frame?',
    'to check the frame for possible transmission errors');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
    'It forwards the frame out of all ports except for the port at which the frame was received.');
add('Which switching method has the lowest level of latency?',
    'fast-forward');
add('Which parameter does the router use to choose the path to the destination when there are multiple routes available?',
    'the lower metric value that is associated with the destination network');
add('Which two statements describe the functions or characteristics of ROM in a router? (Choose two.)',
    'maintains instructions for POST diagnostics',
    'stores bootstrap program');
add('Which statement describes a characteristic of the Cisco router management ports?',
    'A console port is not used for packet forwarding.');
add('What happens when part of an Internet radio transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
    '203.0.113.211');
add('Which three IP addresses are private ? (Choose three.)',
    '10.20.30.1',
    '172.30.5.3',
    '192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
    'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
    '13');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27',
    '192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
    '/25');
add('Which protocol supports rapid delivery of streaming media?',
    'Real-Time Transport Protocol');
add('Why would a network administrator use the tracert utility?',
    'to identify where a packet was lost or delayed on a network');
add('Refer to the exhibit. What is the significance of the asterisk (*) in the exhibited output?',
    'The asterisk designates which file system is the default file system.');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
    'WPA');
add('Fill in the blank.Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as       full-duplex         .',
    'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals',
    'applying security settings to control the flow of data',
    'notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
    'area C');
add('What is the purpose of having a converged network?',
    'to reduce the cost of deploying and maintaining the communication infrastructure');
add('Three office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
    'audio conference, financial transactions, web page');
add('During normal operation, from which location do most Cisco switches and routers run the IOS?',
    'RAM');
add('A network administrator is making changes to the configuration of a router. After making the changes and verifying the results, the administrator issues the copy running-config startup-config command. What will happen after this command executes?',
    'The configuration will load when the router is restarted.');
add('What information does the loopback test provide?',
    'The TCP/IP stack on the device is working correctly.');
add('What is a characteristic of the LLC sublayer?',
    'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?',
    'CSMA/CA');
add('What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?',
    'The switch drops the frame.');
add('Which destination address is used in an ARP request frame?',
    'FFFF.FFFF.FFFF');
add('What is the auto-MDIX feature on a switch?',
    'the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
    'store-and-forward switching');
add('What are the two main components of Cisco Express Forwarding (CEF)? (Choose two.)',
    'routing tables',
    'ARP tables');
add('Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?',
    'It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward the destination host.');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
    'NAT');
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks?',
    'The no shutdown command was not issued on these interfaces.');
add('What happens when part of an Internet television transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
    'TCP and UDP port numbers are used by application layer protocols.',
    'TCP uses windowing and sequencing to provide reliable transfer of data.',
    'TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify the destination web browser?',
    'the destination port number');
add('Which statement is true regarding the UDP client process during a session with a server?',
    'Datagrams that arrive in a different order than that in which they were sent are not placed in order.');
add('Which two components are configured via software in order for a PC to participate in a network environment? (Choose two.)',
    'IP address',
    'subnet mask');
add('What are three characteristics of multicast transmission? (Choose three.)',
    'A single packet can be sent to a group of hosts.',
    'Multicast transmission can be used by routers to exchange routing information.',
    'Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.',
    'It reduces the burden on network support staff.');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A::0');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
    'compression',
    'encryption');
add('What is the purpose of the network security authentication function?',
    'to require users to prove who they are');
add('Which type of wireless security makes use of dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('Fill in the blankDuring data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a         Multicast                    message.',
    'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank.The Server0 message is .​ ”   winner   ”',
    'winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
    'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
    'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
    '2001:db8:abc:5::1');

add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
    'audio conference, financial transactions, web page');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
    'secretin');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)',
    'data link layer addressing',
    'detection of errors through CRC calculations',
    'delimiting groups of bits into frames');
add('What must be configured to enable Cisco Express Forwarding (CEF) on most Cisco devices that perform Layer 3 switching?',
    'CEF is enabled by default, so no configuration is necessary.');
add('What is the purpose of adjacency tables as used in Cisco Express Forwarding (CEF)?',
    'to maintain Layer 2 next-hop addresses');
add('Which statement describes a characteristic of the network layer in the OSI model?',
    'Its protocols specify the packet structure and processing used to carry the data from one host to another.');
add('A user gets an IP address of 192.168.0.1 from the company network administrator. A friend of the user at a different company gets the same IP address on another PC. How can two PCs use the same IP address and still reach the Internet, send and receive email, and search the web?',
    'ISPs use Network Address Translation to change a user IP address into an address that can be used on the Internet.');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
    'link-local');
add('Why does HTTP use TCP as the transport layer protocol?',
    'because HTTP requires reliable delivery');
add('What is the binary representation of 0xCA?',
    '11001010');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
    '2001:DB8:0:AB00::1234');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?​',
    '13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
    'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
    'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
    'tracert 10.1.1.5');
add('To prevent faulty network devices from carrying dangerous voltage levels, equipment must be      grounded        correctly',
    'grounded');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
    'the amount of traffic that is currently crossing the network',
    'the type of traffic that is crossing the network',
    'the latency that is created by the number of network devices that the data is crossing');
add('What is a possible hazard that can be caused by network cables in a fire?',
    'The cable insulation could be flammable.');
add('What device is commonly used to verify a UTP cable?',
    'a cable tester');
add('What needs to be checked when testing a UTP network cable?',
    'wire map');
add('Refer to the exhibit. A ping to PC2 is issued from PC0, PC1, and PC3 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
    'just PC0 and PC1 MAC addresses');
add('Which function is provided by TCP?',
    'detection of missing packets');
add('What does a router use to determine where to send data it receives from the network?',
    'a routing table');
add('Which router interface should be used for direct remote access to the router via a modem?',
    'an AUX port');
add('A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?',
    'any line configuration mode');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
    'TCP and UDP port numbers are used by application layer protocols.',
    'TCP uses windowing and sequencing to provide reliable transfer of data.',
    'TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('Refer to the exhibit. A TCP segment from a server has been captured by Wireshark, which is running on a host. What acknowledgement number will the host return for the TCP segment that has been received?',
    '306');
add('Which statement is true about an interface that is configured with the IPv6 address command?',
    'A link-local IPv6 address is automatically configured on the interface.');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
    'default gateway address');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
    '172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
    '10.1.1.128/28',
    '10.1.1.144/28',
    '10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
    '4');
add('A  logical    topology influences the type of network framing and media access control that will be used.',
    'logical');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration?​',
    'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
    'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? (Choose two.)',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.',
    'If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? (Choose two.)',
    'fast-forward switching',
    'fragment-free switching');
add('A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? (Choose two.)',
    'A port is considered to be open when it has an active server application that is assigned to it.',
    'Server security can be improved by closing ports that are associated with unused services.');

add('What is a characteristic of DNS?',
    'DNS servers can cache recent queries to reduce DNS query traffic.');
add('Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?',
    'SLAAC');
add('What type of communication medium is used with a wireless LAN connection?',
    'microwave');
add('To what legacy address class does the address 10.0.0.0 belong?',
    'Class A');
add('What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?',
    'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.');
add('Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? (Choose two)',
    'VoIP', 'DNS');
add('What is the metric value that is used to reach the 10.1.1.0 network in the following routing table entry? D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0',
    '2170112');
add('What are three important considerations when planning the structure of an IP addressing scheme? (Choose three.)',
    'preventing duplication of addresses',
    'providing and controlling access',
    'conserving addresses');
add('How could a faulty network device create a source of hazard for a user? (Choose two.)',
    'It could stop functioning',
    'It could explode');
add('IPv4 multicast addresses are directly mapped to IEEE 802 (Ethernet) MAC addresses using the last of the 28 available bits in the IPv4 multicast group address.',
    '4');
add('Which statement describes data throughput?',
    'It is the measure of the bits transferred across the media over a given period of time.');
add('What type of IPv6 address is FE80::1?',
    'link-local');
add('What is the primary reason to subnet IPv6 prefixes?',
    'to create a hierarchical Layer 3 network design');
add('What type of communication rule would best describe CSMA/CD?',
    'access method');
add('There was also a question about if you activated service password encryption in the past and you prompt “no service password encryption” what password are modified ?',
    'no password at all;');
add('Why does layer 3 device perform the ANDing process on a destination IP and subnet Mask?',
    'to identify network address of destination host;');
add('A client is establishing a TCP session with a server. How is the acknowledgment number in the response segment to the client determined?',
    'The acknowledgment number field is modified by adding 1 to the randomly chosen initial sequence number in response to the client.');
add('Which statement best describes the operation of the File Transfer Protocol?',
    'An FTP server uses a source port number of 20 and a randomly generated destination port number during the establishment of control traffic with an FTP client.');
add('It will give 4 options about ping, the correct one is',
    'The PC2 will be able to ping 192.168.1.1');
add('How many bits would need to be borrowed if a network admin were given the IP addressing scheme of 172.16.0.0/16 and needed no more than 16 subnet with equal number of hosts?',
    '4');
add('What is a characteristic of UTP cabling?',
    'cancellation');
add('A network administrator is configuring access control to switch SW1. If the administrator uses console line to connect to the switch, which password is needed to access user EXEC mode?',
    'lineconin');
add('A host PC is attempting to lease an address through DHCP. What message is sent by the server to the client know it is able to use the provided IP information?',
    'DHCPOFFER');
add('A network administrator notices that the throughput on the network appears lower than expected when compared to the end-to-end network bandwidth. Which three factors can explain this difference ? (Choose three.)',
    'the amount of traffic',
    'the type of traffic',
    'the number and type of network devices that the data is crossing');
add('Which type of wireless security is easily compromised?',
    'WEP');
add('Which statement is true about DHCP operation?',
    'When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the networK.');
add('Refer to the exhibit. What is the maximum TIL value that is used to reach the destination www.cisco.com?',
    '13');
add('Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
    'Modular');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
    '236.17.12.10');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
    'to identify the network address of the destination network');

//Test 1

add('What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?',
    'has a lower latency appropriate for high-performance computing applications​');
add('A network designer must provide a rationale to a customer for a design which will move an enterprise from a flat network topology to a hierarchical network topology. Which two features of the hierarchical design make it the better choice? (Choose two.)',
    'simpler deployment for additional switch equipment',
    'easier to provide redundant links to ensure higher availability');
add('What are two advantages of modular switches over fixed-configuration switches? (Choose two.)',
    'need for fewer power outlets',
    'increased scalability');
add('Refer to the exhibit. Consider that the main power has just been restored. PC1 asks the DHCP server for IPv4 addressing. The DHCP server sends it an IPv4 address. While PC2 is still booting up, PC3 issues a broadcast IPv4 DHCP request. To which port will SW1 forward this request?​',
    'to Fa0/1, Fa0/2, and Fa0/3 only');
add('What is one function of a Layer 2 switch?',
    'determines which interface is used to forward a frame based on the destination MAC address');
add('There are ” 12 ” collision domains in the topology.​',
    '12');
add('What is a collapsed core in a network design?',
    'a combination of the functionality of the distribution and core layers');
add('What are two reasons a network administrator would segment a network with a Layer 2 switch? (Choose two.)',
    'to enhance user bandwidth',
    'to isolate traffic between segments');
add('Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?',
    'SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch.');
add('What is a basic function of the Cisco Borderless Architecture distribution layer?',
    'aggregating Layer 3 routing boundaries');
add('ABC, Inc. has about fifty hosts in one LAN. The administrator would like to increase the throughput of that LAN. Which device will increase the number of collision domains and thereby increase the throughput of the LAN?',
    'switch');
add('What does the term “port density” represent for an Ethernet switch?',
    'the number of available ports');
add('Which type of transmission does a switch use when the destination MAC address is not contained in the MAC address table?',
    'broadcast');
add('What is a basic function of the Cisco Borderless Architecture access layer?',
    'provides access to the user');
add('What information is added to the switch table from incoming frames?',
    'source MAC address and incoming port number');
add('A     “converged”     network is one that uses the same infrastructure to carry voice, data, and video signals.',
    'converged');
add('An administrator purchases new Cisco switches that have a feature called StackPower. What is the purpose of this feature?',
    'It enables the sharing of power among multiple stackable switches.');
add('Which switch form factor should be used when large port density, fault tolerance, and low price are important factors?',
    'stackable switch');
add('There are     ”  5  ”   broadcast domains in the topology.​',
    '5');
add('What tool is important to consider for use when making hardware improvement decisions about switches?',
    'traffic flow analysis');
add('What is the maximum wire speed of a single port on a 48-port gigabit switch?',
    '1000 Mb/s');
add('When the installation of a network infrastructure is being planned, which technology will allow power to be provided via Ethernet cabling to a downstream switch and its connected devices?',
    'PoE pass-through');
add('A local law firm is redesigning the company network so that all 20 employees can be connected to a LAN and to the Internet. The law firm would prefer a low cost and easy solution for the project. What type of switch should be selected?',
    'fixed configuration');
add('What is a definition of a two-tier LAN network design?',
    'distribution and core layers collapsed into one tier, and the access layer on a separate tier');
add('What two criteria are used by a Cisco LAN switch to decide how to forward Ethernet frames? (Choose two.)',
    'destination MAC address',
    'ingress port');
add('Which statement describes the microsegmentation feature of a LAN switch?',
    'Each port forms a collision domain.');
add('Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? (Choose two.)',
    'analog and VoIP phone traffic',
    'user data traffic');
add('What is the destination address in the header of a broadcast frame?',
    'FF-FF-FF-FF-FF-FF');
add('Which type of address does a switch use to build the MAC address table?',
    'source MAC address');
add('Which two previously independent technologies should a network administrator attempt to combine after choosing to upgrade to a converged network infrastructure? (Choose two.)',
    'analog and VoIP phone traffic',
    'user data traffic');
add('Refer to the exhibit. How many broadcast domains are displayed?',
    '8');
add('How many collision domains are shown in the topology? __2__',
    '2');
add('Which network device can be used to eliminate collisions on an Ethernet network?',
    'switch');

//Test 2

add('Which type of cable does a network administrator need to connect a PC to a switch to recover it after the Cisco IOS software fails to load?',
    'a console cable');
add('Which two basic functions are performed by network security tools? (Choose two.)',
    'revealing the type of information an attacker is able to gather from monitoring network traffic',
    'simulating attacks against the production network to determine any existing vulnerabilities');
add('While troubleshooting a connectivity problem, a network administrator notices that a switch port status LED is alternating between green and amber. What could this LED indicate?',
    'The port is experiencing errors.');
add('Refer to the exhibit. The network administrator wants to configure Switch1 to allow SSH connections and prohibit Telnet connections. How should the network administrator change the displayed configuration to satisfy the requirement?',
    'Modify the transport input command.');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Fill in the blank. Do not use abbreviations.What is the missing command on S1? “ ip address 192.168.99.2 255.255.255.0 ” The ip address 192.168.99.2 255.255.255.0 command is missing on interface vlan 99, the management VLAN.​',
    'ip address 192.168.99.2 255.255.255.0');
add('Which three statements are true about using full-duplex Fast Ethernet? (Choose three.)',
    'Performance is improved with bidirectional data flow.',
    'Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.',
    'Performance is improved because the collision detect function is disabled on the device.');
add('In which type of attack does a malicious node request all available IP addresses in the address pool of a DHCP server in order to prevent legitimate hosts from obtaining network access?​',
    'DHCP starvation');
add('Which protocol or service sends broadcasts containing the Cisco IOS software version of the sending device, and the packets of which can be captured by malicious hosts on the network?',
    'CDP');
add('Which two statements are true regarding switch port security? (Choose two.)',
    'Dynamically learned secure MAC addresses are lost when the switch reboots.',
    'If fewer than the maximum number of MAC addresses for a port are configured statically, dynamically learned addresses are added to CAM until the maximum number is reached.');
add('The network administrator enters the following commands on a Cisco switch: Switch(config)# interface vlan1 Switch(config-if)# ip address 192.168.1.2 255.255.255.0 Switch(config-if)# no shutdown What is the effect of entering these commands?',
    'Users on the 192.168.1.0/24 subnet are able to ping the switch at IP address 192.168.1.2.');
add('Refer to the exhibit. Port Fa0/2 has already been configured appropriately. The IP phone and PC work properly. Which switch configuration would be most appropriate for port Fa0/2 if the network administrator has the following goals? No one is allowed to disconnect the IP phone or the PC and connect some other wired device. If a different device is connected, port Fa0/2 is shut down. The switch should automatically detect the MAC address of the IP phone and the PC and add those addresses to the running configuration.',
    'SWA(config-if)# switchport port-security',
    'SWA(config-if)# switchport port-security maximum 2',
    'SWA(config-if)# switchport port-security mac-address sticky');
add('Refer to the exhibit. Which event will take place if there is a port security violation on switch S1 interface Fa0/1?',
    'Packets with unknown source addresses will be dropped.');
add('Which method would mitigate a MAC address flooding attack?',
    'configuring port security');
add('Refer to the exhibit. What media issue might exist on the link connected to Fa0/1 based on the show interface command?',
    'There could be too much electrical interference and noise on the link.');
add('” Full-duplex” communication allows both ends of a connection to transmit and receive data simultaneously.',
    'Full-duplex');
add('Which interface is the default location that would contain the IP address used to manage a 24-port Ethernet switch?',
    'VLAN 1');
add('Which action will bring an error-disabled switch port back to an operational state?',
    'Issue the shutdown and then no shutdown interface commands.');
add('Refer to the exhibit. What can be determined about port security from the information that is shown?',
    'The port violation mode is the default for any port that has port security enabled.');
add('When port security is enabled, a switch port uses the default violation mode of    ”   shutdown  ”    until specifically configured to use a different violation mode.',
    'shutdown');
add('Refer to the exhibit. Which S1 switch port interface or interfaces should be configured with the ip dhcp snooping trust command if best practices are implemented?',
    'only the G0/1 and G0/24 ports');
add('What impact does the use of the mdix auto configuration command have on an Ethernet interface on a switch?',
    'automatically detects copper cable type');
add('Which command displays information about the auto-MDIX setting for a specific interface?​',
    'show controllers');
add('A production switch is reloaded and finishes with a Switch> prompt. What two facts can be determined? (Choose two.)',
    'A full version of the Cisco IOS was located and loaded.',
    'POST occurred normally.');
add('Which two statements are true about using full-duplex Fast Ethernet?',
    'Performance is improved with bidirectional data flow.',
    'Full-duplex Fast Ethernet offers 100 percent efficiency in both directions.');
add('A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?',
    'restrict');
add('An administrator wants to use a network security auditing tool on a switch to verify which ports are not protected against a MAC flooding attack. For the audit to be successful, what important factor must the administrator consider?',
    'the aging-out period of the MAC address table');
add('Which two features on a Cisco Catalyst switch can be used to mitigate DHCP starvation and DHCP spoofing attacks? (Choose two.)',
    'port security',
    'DHCP snooping');
add('What is one difference between using Telnet or SSH to connect to a network device for management purposes?',
    'Telnet sends a username and password in plain text, whereas SSH encrypts the username and password.');
add('Refer to the exhibit. A network technician is troubleshooting connectivity issues in an Ethernet network with the command show interfaces fastEthernet 0/0. What conclusion can be drawn based on the partial output in the exhibit?',
    'A malfunctioning NIC can cause frames to be transmitted that are longer than the allowed maximum length.');
add('In which situation would a technician use the show interfaces switch command?',
    'when packets are being dropped from a particular directly attached host');
add('Which statement describes the port speed LED on the Cisco Catalyst 2960 switch?',
    'If the LED is green, the port is operating at 100 Mb/s.');
add('What is a function of the switch boot loader?',
    'to provide an environment to operate in when the switch operating system cannot be found');
add('A network administrator is determining the best placement of VLAN trunk links. Which two types of point-to-point connections utilize VLAN trunking?​ (Choose two.)',
    'between a switch and a server that has an 802.1Q NIC',
    'between two switches that utilize multiple VLANs');
add('What happens to a port that is associated with VLAN 10 when the administrator deletes VLAN 10 from the switch?',
    'The port becomes inactive.');
add('Refer to the exhibit. Interface Fa0/1 is connected to a PC. Fa0/2 is a trunk link to another switch. All other ports are unused. Which security best practice did the administrator forget to configure?',
    'All user ports are associated with VLANs distinct from VLAN 1 and distinct from the ‘black-hole’ VLAN.');
add('Which command is used to remove only VLAN 20 from a switch?',
    'no vlan 20');
add('A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?',
    'Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch.');
add('What is the effect of issuing a switchport access vlan 20 command on the Fa0/18 port of a switch that does not have this VLAN in the VLAN database?',
    'VLAN 20 will be created automatically.');
add('Which command displays the encapsulation type, the voice VLAN ID, and the access mode VLAN for the Fa0/1 interface?',
    'show interfaces Fa0/1 switchport');
add('Port Fa0/11 on a switch is assigned to VLAN 30. If the command no switchport access vlan 30 is entered on the Fa0/11 interface, what will happen?',
    'Port Fa0/11 will be returned to VLAN 1.');
add('What must the network administrator do to remove Fast Ethernet port fa0/1 from VLAN 2 and assign it to VLAN 3?',
    'Enter the switchport access vlan 3 command in interface configuration mode.');
add('Which two Layer 2 security best practices would help prevent VLAN hopping attacks? (Choose two.)',
    'Disable DTP autonegotiation on end-user ports.',
    'Change the native VLAN number to one that is distinct from all user VLANs and is not VLAN 1.');
add('In a basic VLAN hopping attack, which switch feature do attackers take advantage of?',
    'the default automatic trunking configuration');
add('A Cisco switch currently allows traffic tagged with VLANs 10 and 20 across trunk port Fa0/5. What is the effect of issuing a switchport trunk allowed vlan 30 command on Fa0/5?',
    'It allows only VLAN 30 on Fa0/5.');
add('Refer to the exhibit. A frame is traveling between PC-A and PC-B through the switch. Which statement is true concerning VLAN tagging of the frame?',
    'No VLAN tag is added to the frame.');
add('Refer to the exhibit. PC-A and PC-B are both in VLAN 60. PC-A is unable to communicate with PC-B. What is the problem?',
    'The VLAN that is used by PC-A is not in the list of allowed VLANs on the trunk.');
add('What VLANs are allowed across a trunk when the range of allowed VLANs is set to the default value?',
    'All VLANs will be allowed across the trunk.');
add('Under which two occasions should an administrator disable DTP while managing a local area network? (Choose two.)',
    'on links that should not be trunking',
    'when connecting a Cisco switch to a non-Cisco switch');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which PCs will receive the broadcast sent by PC-C?',
    'PC-D, PC-E');
add('Which two statements are true about VLAN implementation? (Choose two.)',
    'Devices in one VLAN do not hear the broadcasts from devices in another VLAN.',
    'VLANs logically group hosts, regardless of physical location.');
add('Refer to the exhibit. DLS1 is connected to another switch, DLS2, via a trunk link. A host that is connected to DLS1 is not able to communicate to a host that is connected to DLS2, even though they are both in VLAN 99. Which command should be added to Fa0/1 on DLS1 to correct the problem?',
    'switchport trunk native vlan 66');
add('Which switch feature ensures that no unicast, multicast, or broadcast traffic is passed between ports that are configured with this feature?',
    'PVLAN protected port');
add('The ” show vlan brief ” command displays the VLAN assignment for all ports as well as the existing VLANs on the switch.',
    'show vlan brief');
add('Which three statements accurately describe VLAN types? (Choose three).',
    'An 802.1Q trunk port, with a native VLAN assigned, supports both tagged and untagged traffic.',
    'A management VLAN is any VLAN that is configured to access management features of the switch.',
    'After the initial boot of an unconfigured switch, all ports are members of the default VLAN.');
add('Which command should the network administrator implement to prevent the transfer of DTP frames between a Cisco switch and a non-Cisco switch?',
    'S1(config-if)# switchport nonegotiate');
add('Which combination of DTP modes set on adjacent Cisco switches will cause the link to become an access link instead of a trunk link?',
    'dynamic auto – dynamic auto');
add('An administrator has determined that the traffic from a switch that corresponds to a VLAN is not being received on another switch over a trunk link. What could be the problem?',
    'allowed VLANS on trunks');
add('What is the default DTP mode on Cisco 2960 and 3560 switches?',
    'dynamic auto');
add('Refer to the exhibit. What can be determined from the output that is shown?',
    'Interface FastEthernet 0/1 is configured with the switchport protected command.');
add('Which two characteristics match extended range VLANs? (Choose two.)',
    'They are saved in the running-config file by default.',
    'VLAN IDs exist between 1006 to 4094.');
add('Which type of VLAN is used to designate which traffic is untagged when crossing a trunk port?',
    'native');
add('What are three primary benefits of using VLANs? (Choose three.)',
    'security',
    'improved IT staff efficiency',
    'cost reduction');
add('What happens to switch ports after the VLAN to which they are assigned is deleted?',
    'The ports stop communicating with the attached devices.');
add('Which two modes does Cisco recommend when configuring a particular switch port? (Choose two.)',
    'trunk',
    'access');

//TEST 4

add('What type of IPv6 address is required as a minimum on IPv6 enabled interfaces?',
    'link-local');
add('In order for packets to be sent to a remote destination, what three pieces of information must be configured on a host? (Choose three.)',
    'default gateway',
    'IP address',
    'subnet mask');
add('What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)',
    'Layer 1 statuses',
    'IP addresses');
add('Which two items are used by a host device when performing an ANDing operation to determine if a destination address is on the same local network? (Choose two.)',
    'destination IP address',
    'subnet mask');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. What two conclusions can be drawn from the routing table? (Choose two.)',
    'R1 does not know a route to any remote networks.',
    'The interface Fa0/1 is configured with IPv6 address 2001:DB8:ACAD:A::12.');
add('Refer to the exhibit. What is the purpose of the highlighted field in the line that is displayed from the show ip route command?',
    'It indicates that this route was learned via EIGRP.');
add('Which two statements correctly describe the concepts of administrative distance and metric? (Choose two.)',
    'Routes with the smallest metric to a destination indicate the best path.',
    'Administrative distance refers to the trustworthiness of a particular route.');
add('What are two functions of a router? (Choose two.)',
    'It determines the best path to send packets.',
    'It connects multiple IP networks.');
add('A packet moves from a host on one network to a device on a remote network within the same company. If NAT is not performed on the packet, which two items remain unchanged during the transfer of the packet from source to destination? (Choose two.)',
    'source IP address',
    'destination IP address');
add('Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?',
    'the MAC address of the G0/0 interface on R1');
add('A network administrator configures the interface fa0/0 on the router R1 with the command ip address 172.16.1.254 255.255.255.0. However, when the administrator issues the command show ip route, the routing table does not show the directly connected network. What is the possible cause of the problem?',
    'The interface fa0/0 has not been activated.');
add('Which command is used to configure an IPv6 address on a router interface so that the router will combine a manually specified network prefix with an automatically generated interface identifier?',
    'ipv6 address ipv6-address/prefix-length eui-64');
add('When a router receives a packet, it examines the destination address of the packet and looks in the ” routing ” table to determine the best path to use to forward the packet.',
    'routing');
add('A network administrator configures a router by the command ip route 0.0.0.0 0.0.0.0 209.165.200.226. What is the purpose of this command?',
    'to provide a route to forward packets for which there is no route in the routing table');
add('Refer to the exhibit. A network administrator issues the show ipv6 route command on R1. Which two types of routes are displayed in the routing table? (Choose two.)',
    'directly connected network',
    'local host route');
add('What address changes as a packet travels across multiple Layer 3 Ethernet hops to its final destination?',
    'source Layer 2 address');
add('Refer to the exhibit. What will the router do with a packet that has a destination IP address of 192.168.12.227?',
    'Send the packet out the Serial0/0/0 interface.');
add('A network administrator is implementing dynamic routing protocols for a company. Which command can the administrator issue on a router to display the supported routing protocols?',
    'Router(config)# router ?');
add('Refer to the exhibit. A network administrator has configured R1 as shown. When the administrator checks the status of the serial interface, the interface is shown as being administratively down. What additional command must be entered on the serial interface of R1 to bring the interface up?',
    'no shutdown');
add('What is one feature that distinguishes routers from Layer 2 switches?',
    'Routers support a variety of interface types. Switches typically support Ethernet interfaces.');
add('Which statement describes a route that has been learned dynamically?',
    'It is automatically updated and maintained by routing protocols.');
add('Refer to the exhibit. A network administrator issues the show ip route command on R2. What two types of routes are installed in the routing table? (Choose two.)',
    'directly connected networks',
    'routes that are learned through the EIGRP routing protocol');
add('When a computer is pinging another computer for the first time, what type of message does it place on the network to determine the MAC address of the other device?',
    'an ARP request');
add('Which two network parameters are used by EIGRP as metrics to select the best path to reach a network? (Choose Two.)',
    'bandwidth',
    'delay');
add('What route would have the lowest administrative distance?',
    'a directly connected network');
add('Which two parameters are used by EIGRP as metrics to select the best path to reach a network? (Choose two.)​',
    'bandwidth',
    'delay');
add('What are two common types of static routes in routing tables? (Choose two)',
    'a default static route',
    'a static route to a specific network');
add('Which software is used for a network administrator to make the initial router configuration securely?',
    'terminal emulation client software');
add('What is the significance of the Serial0/0/0?',
    'It is the interface on R1 used to send data that is destined for 10.1.1.0/24.');
add('Refer to the exhibit. PC A sends a request to Server B. What IPv4 address is used in the destination field in the packet as the packet leaves PC A?',
    '192.168.12.16');
add('What command will enable a router to begin sending messages that allow it to configure a link-local address without using an IPv6 DHCP server?',
    'the ipv6 unicast-routing command');
add('What are two types of static routes in routing tables? (choose two)',
    'default static route',
    'static route to specific network');
add('What is a characteristic of an IPv4 interface on a Cisco IOS router?',
    'it is a logical int internal to the router');
add('Refer to the exhibit. What does R1 use as the MAC address of the destination when constructing the frame that will go from R1 to Server B?',
    'If the destination MAC address that corresponds to the IPv4 address is not in the ARP cache, R1 sends an ARP request.');
add('Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?',
    'remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0');
add('What is a characteristic of an IPv4 loopback interface on a Cisco IOS router?​',
    'It is a logical interface internal to the router.');


/*Answers for block questions and Packet Tracer Labs*/

add = prompts.add;

//add('helper label');

add("С праздником! А Ciscer'у вы верите!?");
add('dynamic desirable - actively attemts');
add('dynamic auto - passively waits');
add('nonegotiate - requires manual');
add('trunk - permament trunking mode');
add('User Priority – value that supports level or service implementation');
add('Type – value for the tag protocol ID value');
add('Canonical Format Identifier – identifier that enables Token Ring frames to be carried across Ethernet ');
add('VLAN ID – VLAN number');
add('next hop - 172.16.2.2');
add('destination network - 10.3.0.0');
add('metric - 21024000');
add('administrative distance - 1');
add('route timestamp - 00:22:15');
add('route source protocol - D');

//Test 5

add('A network engineer is troubleshooting the configuration of new VLANs on a network. ​Which command is used to display the list of VLANs that exists on the switch? ” show vlan ”',
    'show vlan');
add('What is a disadvantage of using multilayer switches for inter-VLAN routing?',
    'Multilayer switches are more expensive than router-on-a-stick implementations.');
add('Refer to the exhibit. A router-on-a-stick configuration was implemented for VLANs 15, 30, and 45, according to the show running-config command output. PCs on VLAN 45 that are using the 172.16.45.0 /24 network are having trouble connecting to PCs on VLAN 30 in the 172.16.30.0 /24 network. Which error is most likely causing this problem?​',
    'There is an incorrect IP address configured on GigabitEthernet 0/0.30.');
add('Refer to the exhibit. A network administrator has configured router CiscoVille with the above commands to provide inter-VLAN routing. What command will be required on a switch that is connected to the Gi0/0 interface on router CiscoVille to allow inter-VLAN routing?​',
    'switchport mode trunk');
add('Refer to the exhibit. The switch does the routing for the hosts that connect to VLAN 5. If the PC accesses a web server from the Internet, at what point will a VLAN number be added to the frame?',
    'No VLAN number is added to the frame in this design.');
add('Inter-VLAN communication is not occurring in a particular building of a school. Which two commands could the network administrator use to verify that inter-VLAN communication was working properly between a router and a Layer 2 switch when the router-on-a-stick design method is implemented? (Choose two.)',
    'From the switch, issue the show interface trunk command.',
    'From the router, issue the show ip route command.');
add('Refer to the exhibit. Router RA receives a packet with a source address of 192.168.1.35 and a destination address of 192.168.1.85. What will the router do with this packet?',
    'The router will forward the packet out interface FastEthernet 0/1.2.');
add('What condition is required to enable Layer 3 switching?',
    'The Layer 3 switch must have IP routing enabled.');
add('Which type of inter-VLAN communication design requires the configuration of multiple subinterfaces?',
    'router on a stick');
add('Refer to the exhibit. A network administrator is configuring RT1 for inter-VLAN routing. The switch is configured correctly and is functional. Host1, Host2, and Host3 cannot communicate with each other. Based on the router configuration, what is causing the problem?',
    'IP addresses on the subinterfaces are incorrectly matched to the VLANs.');
add('How is traffic routed between multiple VLANs on a multilayer switch?',
    'Traffic is routed via internal VLAN interfaces.');
add('Refer to the exhibit. Communication between the VLANs is not occurring. What could be the issue?',
    'The Gi1/1 switch port is not in trunking mode.');
add('What is a disadvantage of using router-on-a-stick inter-VLAN routing?',
    'does not scale well beyond 50 VLANs');
add('Which statement describes a disadvantage of using router subinterfaces for inter-VLAN routing?',
    'Routed traffic must contend for bandwidth on a single router interface.');
add('While configuring inter-VLAN routing on a multilayer switch, a/an   ” SVI ”   is used as a virtual-routed VLAN interface.',
    'SVI');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PC2 cannot communicate with PC1. Based on the output, what is the possible cause of the problem?',
    'The encapsulation dot1Q 5 command contains the wrong VLAN.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Users complain that PCs on different VLANs cannot communicate. Based on the output, what are two configuration errors on switch interface Gi1/1? (Choose two.)',
    'Gi1/1 is configured as trunk mode.',
    'Gi1/1 is in the default VLAN.');
add('While configuring inter-VLAN routing on a multilayer switch, a network administrator issues the no switchport command on an interface that is connected to another switch. What is the purpose of this command?',
    'to create a routed port for a single network');
add('Which command is missing on the Layer 3 switch to restore the full connectivity between PC1 and the web server?',
    'ip address 192.168.20.1 255.255.255.0');
add('A small college uses VLAN 10 for the classroom network and VLAN 20 for the office network. What is needed to enable communication between these two VLANs while using legacy inter-VLAN routing?',
    'A router with at least two LAN interfaces should be used.');
add('Refer to the exhibit. After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?',
    'RTA is using the same subnet for VLAN 20 and VLAN 30.');
add('Refer to the exhibit. A network administrator needs to configure router-on-a-stick for the networks that are shown. How many subinterfaces will have to be created on the router if each VLAN that is shown is to be routed and each VLAN has its own subinterface?',
    '4');
add('Refer to the exhibit. Which command can the administrator issue to change the VLAN10 status to up?​',
    'Switch1(config)# vlan 10');
add('How are IP addressing designs affected by VLAN implementations?',
    'Each VLAN must have a different network number.');
add('What is a characteristic of a routed port on a Layer 3 switch?',
    'It is not assigned to a VLAN.');
add('An administrator is attempting to configure a static route on a Cisco 2960 series switch. After the administrator types the command ip route 0.0.0.0 0.0.0.0 10.1.1.1, an error message appears stating that the command is not recognized. What must the administrator do so that this command is accepted?',
    'Enter the command sdm prefer lanbase-routing and reload.');
add('Refer to the exhibit. In this network design, which connection or connections if any, add the VLAN ID number if host H1 sends information to host H2?',
    'no link');
add('What is a characteristic of legacy inter-VLAN routing?',
    'The router requires one Ethernet link for each VLAN.');
add('Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?',
    'A: trunk');
add('Refer to the exhibit. What is the problem with this configuration, based on the output of the router?',
    'The encapsulation has not been configured on the subinterface.');
add('Refer to the exhibit. A network administrator is verifying the configuration of inter-VLAN routing. Based on the partial output that is displayed by the use of the show vlan command, which conclusion can be drawn for the Gi1/1 interface?',
    'It is configured as trunk mode.');
add('Refer to the exhibit. In what switch mode should port G0/1 be assigned if Cisco best practices are being used?',
    'Drop the packet.');


//Test 6
add('What are two advantages of static routing over dynamic routing? (Choose two.)',
    'Static routing is more secure because it does not advertise over the network.',
    'Static routing uses fewer router resources than dynamic routing.');
add('Refer to the exhibit. Which is the best way for PC A and PC B to successfully communicate with sites on the Internet?',
    'Configure a default route from R1 to ISP and a static route from ISP to R1.');
add('Refer to the exhibit. The small company shown uses static routing. Users on the R2 LAN have reported a problem with connectivity. What is the issue?',
    'R1 needs a static route to the R2 LAN.');
add('Refer to the exhibit. The network engineer for the company that is shown wants to use the primary ISP connection for all external connectivity. The backup ISP connection is used only if the primary ISP connection fails. Which set of commands would accomplish this goal?',
    'ip route 0.0.0.0 0.0.0.0 s0/0/0<br>ip route 0.0.0.0 0.0.0.0 s0/1/0 10');
add('What type of route allows a router to forward packets even though its routing table contains no specific route to the destination network?',
    'default route');
add('Refer to the graphic. Which command would be used on router A to configure a static route to direct traffic from LAN A that is destined for LAN C?',
    'A(config)# ip route 192.168.4.0 255.255.255.0 192.168.3.2');
add('The network administrator configures the router with the ip route 172.16.1.0 255.255.255.0 172.16.2.2 command. How will this route appear in the routing table?',
    'S 172.16.1.0 [1/0] via 172.16.2.2');
add('Refer to the exhibit. The network administrator needs to configure a default route on the Border router. Which command would the administrator use to configure a default route that will require the least amount of router processing when forwarding packets?',
    'Border(config)# ip route 0.0.0.0 0.0.0.0 s0/0/1');
add('Why would a floating static route be configured with an administrative distance that is higher than the administrative distance of a dynamic routing protocol that is running on the same router?',
    'to be used as a backup route');
add('Refer to the exhibit. What command would be used to configure a static route on R1 so that traffic from both LANs can reach the 2001:db8:1:4::/64 remote network?',
    'ipv6 route 2001:db8:1:4::/64 2001:db8:1:3::2');
add('Refer to the exhibit. Which default static route command would allow R1 to potentially reach all unknown networks on the Internet?',
    'R1(config)# ipv6 route ::/0 G0/1 fe80::2');
add('Which two statements describe classful IP addresses? (Choose two.)',
    'All subnets in a network are the same size.',
    'The number of bits used to identify the hosts is fixed by the class of the network.');
add('Which block of addresses would be the minimum to accommodate all of these devices if each type of device was on its own network?',
    '172.16.0.0/24');
add('What does VLSM allow a network administrator to do?',
    'utilize multiple different subnet masks in the same IP address space');
add('What would be the best summary route for the following networks?',
    '10.50.168.0/21');
add('What is a valid summary route for IPv6 networks 2001:0DB8:ACAD:4::/64, 2001:0DB8:ACAD:5::/64, 2001:0DB8:ACAD:6::/64, and 2001:0DB8:ACAD:7::/64?',
    '2001:0DB8:ACAD:0004::/62');
add('Which type of static route that is configured on a router uses only the exit interface?',
    'directly connected static route');
add('Which three IOS troubleshooting commands can help to isolate problems with a static route? (Choose three.)',
    'show ip route',
    'show ip interface brief',
    'ping');
add('Refer to the exhibit. What two commands will change the next-hop address for the 10.0.0.0/8 network from 172.16.40.2 to 192.168.1.2? (Choose two.)',
    'A(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.2',
    'A(config)# no ip route 10.0.0.0 255.0.0.0 172.16.40.2');
add('What happens to a static route entry in a routing table when the outgoing interface is not available?',
    'The route is removed from the table.');
add('Open the PT activity. Perform the tasks in the activity instructions and then answer the question. What is the name of the web server that is displayed in the webpage?',
    'Webserver10');
add('What IPv6 static route can be configured on router R1 to make a fully converged network?',
    'ipv6 route 2001:db8:10:12::/64 S0/0/1');
add('Consider the following command: ip route 192.168.10.0 255.255.255.0 10.10.10.2 5 How would an administrator test this configuration?',
    'Manually shut down the router interface used as a primary route.');
add('What would be the first step in calculating a summarized route for 5 networks?',
    'Write all network numbers in binary.');
add('What two pieces of information are needed in a fully specified static route to eliminate recursive lookups? (Choose two.)',
    'the interface ID exit interface',
    'the IP address of the next-hop neighbor');
add('Refer to the exhibit. What routing solution will allow both PC A and PC B to access the Internet with the minimum amount of router CPU and network bandwidth utilization?',
    'Configure a static default route from R1 to Edge, a default route from Edge to the Internet, and a static route from Edge to R1.');
add('What is the correct syntax of a floating static route?',
    'ip route 209.165.200.228 255.255.255.248 10.0.0.1 120');
add('What happens to a static route entry in a routing table when the outgoing interface associated with that route goes into the down state?',
    'The static route is removed from the routing table.');

/*Answers for block questions and Packet Tracer Labs*/

add = prompts.add;

//add('helper label');
add('router-on-a-stick' +
    '<br>Layer 3 with SVIs' +
    '<br>– not scored' +
    '<br>–Layer 3 with routed ports');

//Lab 6
add('---PC1------');
add('IP ADDRESS 10.10.16.126');
add('SUB MASK 255.255.255.128');
add('DEFAULT 10.10.16.1');
add('--PC2-------');
add('IP ADDRESS 10.10.16.254');
add('SUB MASK 255.255.255.128');
add('DEFAULT 10.10.16.129');
add('--R2--------');
add('config t');
add('interface g0/0');
add('ip address 10.10.16.1 255.255.255.128');
add('no shutdown');
add('exit');
add('interface g0/1');
add('ip address 10.10.16.129 255.255.255.128');
add('no shutdown');
add('exit');
add('ip route 0.0.0.0 0.0.0.0 10.10.20.1');
add('--R1--------');
add('config t');
add('ip route 0.0.0.0 0.0.0.0 s0/0e/0');
add('ip route 10.10.16.0 255.255.255.0 s0/1/1');
add('ipv6 route ::/0 s0/0/1');
add('ipv6 route 2001:db8:1:a::/63 s0/1/0');
add('ip route 64.100.100.0 255.255.255.0 s0/0/1 2');
add('--R3-------');
add('config t');
add('ipv6 route ::/0 s0/0/0');

//Test 7

add('What is the purpose of the passive-interface command?',
    'allows a router to receive routing updates on an interface but not send updates via that interface');
add('What two tasks do dynamic routing protocols perform? (Choose two.)',
    'network discovery',
    'update and maintain routing tables');
add('The command   “version 2”   is used in RIP router configuration mode to enable the sending of subnet masks with the routing updates.',
    'version 2');
add('Refer to the exhibit. OSPF is used in the network. Which path will be chosen by OSPF to send data packets from Net A to Net B?',
    'R1, R3, R5, R7');
add('Which two statements are true regarding classless routing protocols? (Choose two.)',
    'allows for use of both 192.168.1.0/30 and 192.168.1.16/28 subnets in the same topology',
    'sends subnet mask information in routing updates');
add('What two actions result from entering the network 192.168.1.0 command in RIP configuration mode on a router? (Choose two.)',
    'Routing updates are sent through all the interfaces belonging to 192.168.1.0.',
    'The network address 192.168.1.0 is advertised to the neighbor routers.');
add('Refer to the exhibit. Based on the partial output from the show ip route command, what two facts can be determined about the RIP routing protocol? (Choose two.)',
    'The command no auto-summary has been used on the RIP neighbor router.',
    'RIP version 2 is running on this router and its RIP neighbor.');
add('In the context of routing protocols, what is a definition for time to convergence?',
    'the amount of time for the routing tables to achieve a consistent state after a topology change');
add('When configuring RIPng, the ” default-information originate ” command instructs the router to propagate a static default route.​',
    'default-information originate');
add('A destination route in the routing table is indicated with a code D. Which kind of route entry is this?',
    'a route dynamically learned through the EIGRP routing protocol');
add('Refer to the exhibit. Which interface will be the exit interface to forward a data packet with the destination IP address 172.16.0.66?',
    'Serial0/0/1');
add('Which route is the best match for a packet entering a router with a destination address of 10.16.0.2?',
    'S 10.16.0.0/24 [1/0] via 192.168.0.9');
add('Which two requirements are necessary before a router configured with a link-state routing protocol can build and send its link-state packets? (Choose two.)',
    'The router has determined the costs associated with its active links.',
    'The router has established its adjacencies.');
add('Which two requirements are used to determine if a route can be considered as an ultimate route in a router’s routing table? (Choose two.)',
    'contain a next-hop IP address',
    'contain an exit interface');
add('What is different between IPv6 routing table entries compared to IPv4 routing table entries?',
    'By design IPv6 is classless so all routes are effectively level 1 ultimate routes.');
add('Which dynamic routing protocol was developed as an exterior gateway protocol to interconnect different Internet providers?',
    'BGP');
add('Which route will a router use to forward an IPv4 packet after examining its routing table for the best match with the destination address?',
    'a level 1 ultimate route');
add('Which two statements describe the OSPF routing protocol? (Choose two.)',
    'calculates its metric using bandwidth',
    'uses Dijkstra’s algorithm to build the SPF tree');
add('Which two events will trigger the sending of a link-state packet by a link-state routing protocol? (Choose two.)',
    'a change in the topology',
    'the initial startup of the routing protocol process');
add('Refer to the exhibit. A network administrator has issued the exhibited commands in an attempt to activate RIPng on interface gig0/0. What is causing the console message that is shown after RIP is enabled?',
    'IPv6 unicast routing has not been enabled on this router.');
add('Which type of route will require a router to perform a recursive lookup?',
    'an ultimate route that is using a next hop IP address on a router that is not using CEF');
add('After a network topology change occurs, which distance vector routing protocol can send an update message directly to a single neighboring router without unnecessarily notifying other routers?',
    'EIGRP');
add('An OSPF enabled router is processing learned routes to select best paths to reach a destination network. What is the OSPF algorithm evaluating as the metric?',
    'The cumulative bandwidth that is used along the routing path.');
add('What is a disadvantage of using dynamic routing protocols?',
    'They send messages about network status insecurely across networks by default.');
add('While configuring RIPv2 on an enterprise network, an engineer enters the command network 192.168.10.0 into router configuration mode. What is the result of entering this command?',
    'The interface of the 192.168.10.0 network is sending only version 2 updates.');
add('Which routing protocol uses link-state information to build a map of the topology for computing the best path to each destination network?',
    'OSPF');
add('A router is configured to participate in multiple routing protocol: RIP, EIGRP, and OSPF. The router must send a packet to network 192.168.14.0. Which route will be used to forward the traffic?',
    'a 192.168.14.0 /26 route that is learned via RIP');
add('When does a link-state router send LSPs to its neighbors?',
    'immediately after receiving an LSP from neighbors with updates');

//Test 8

add('Which OSPF component is identical in all routers in an OSPF area after convergence?',
    'link-state database');
add('Which three statements describe features of the OSPF topology table? (Choose three.)',
    'When converged, all routers in an area have identical topology tables.',
    'It is a link-state database that represents the network topology.',
    'The table can be viewed via the show ip ospf database command.');
add('A router is participating in an OPSFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OPSF router?',
    'OSPF will remove that neighbor from the router link-state database.');
add('Which command will provide information specific to OSPFv3 routes in the routing table?',
    'show ipv6 route ospf');
add('Which wildcard mask would be used to advertise the 192.168.5.96/27 network as part of an OSPF configuration?',
    '0.0.0.31');
add('A network administrator enters the command ipv6 router ospf 64 in global configuration mode. What is the result of this command?',
    'The OSPFv3 process will be assigned an ID of 64.');
add('The election of a DR and a BDR takes place on    ” multiaccess ”     networks, such as Ethernet networks.',
    'multiaccess');
add('OSPF uses    ” cost ”    as a metric.',
    'cost');
add('Which command should be used to check the OSPF process ID, the router ID, networks the router is advertising, the neighbors the router is receiving updates from, and the default administrative distance?',
    'show ip protocols');
add('Which OSPFv3 function works differently from OSPFv2?',
    'authentication');
add('What message is displayed on www.ciscoville.com?The correct configuration on R1 is:router ospf 10network 192.168.2.0 0.0.0.255 area 0network 10.0.10.0 0.0.0.3 area 0The correct configuration on R2 is:router ospf 10network 10.0.10.0 0.0.0.3 area 0network 10.0.10.4 0.0.0.3 area 0network 172.16.5.0 0.0.0.255 area 0',
    'Completion!');
add('To quickly verify OSPFv3 configuration information including the OSPF process ID, the router ID, and the interfaces enabled for OSPFv3, you need to issue the command    ” show ipv6 protocols ”',
    'show ipv6 protocols');
add('Which three statements describe the similarities between OSPFv2 and OSPFv3? (Choose three.)',
    'They both use the same DR/BDR election process.',
    'They both share the concept of multiple areas.',
    'They both are link-state protocols.');
add('What is a function of OSPF hello packets?',
    'to discover neighbors and build adjacencies between them');
add('What are the two purposes of an OSPF router ID? (Choose two.)',
    'to uniquely identify the router within the OSPF domain',
    'to facilitate router participation in the election of the designated router');
add('Which command will verify that a router that is running OSPFv3 has formed an adjacency with other routers in its OSPF area?',
    'show ipv6 ospf neighbor');
add('Single area OSPFv3 has been enabled on a router via the ipv6 router ospf 20 command. Which command will enable this OSPFv3 process on an interface of that router?',
    'ipv6 ospf 20 area 0');
add('When a network engineer is configuring OSPFv3 on a router, which command would the engineer issue immediately before configuring the router ID?',
    'ipv6 router ospf 10');
add('Which criterion is preferred by the router to choose a router ID?',
    'the router-id rid command');
add('Which OPSF packet contains the different types of link-state advertisements?',
    'LSU');
add('What does a Cisco router use automatically to create link-local addresses on serial interfaces when OSPFv3 is implemented?',
    'an Ethernet interface MAC address available on the router, the FE80::/10 prefix, and the EUI-64 process');
add('A router is participating in an OSPFv2 domain. What will always happen if the dead interval expires before the router receives a hello packet from an adjacent DROTHER OSPF router?',
    'OSPF will remove that neighbor from the router link-state database.');
add('What is the first criterion used by OSPF routers to elect a DR?',
    'Highest priority');
add('Which OSPFv3 function works differently from OSPFv2?',
    'authentication');
add('What is used to create the OSPF neighbor table?',
    'adjacency database');
add('What are two reasons that will prevent routers from forming an OSPFv2 adjacency? (Choose two.)',
    'mismatched subnet masks on the link interfaces',
    'mismatched OSPF Hello or Dead timers');
add('What command would be issued to determine if a routing protocol-initiated relationship has been made with an adjacent router?',
    'show ip ospf neighbor');
add('Which three addresses could be used as the destination address for OSPFv3 messages? (Choose three.)',
    'FF02::5',
    'FE80::1',
    'FF02::6');
add('Refer to the exhibit. A network administrator issued the command show ip ospf interface on the router R2. What conclusion can be drawn?',
    'R2 has not formed an adjacency with any other router');
add('What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?',
    'show ip ospf neighbor');

//add('helper label');
//Tests 7-8

add('distance vector: RIPv2, EIGRP');
add('link-state: OSPF, IS-IS');

add('static: typically used on stub networks');
add('static: less routing overhead');
add('dynamic: new networks are added automatically to the routing table');
add('dynamic: best choice for large networks');

add('advantage: event-driven updates');
add('advantage: building a topological map');
add('advantage: fast convergence');
add('disadvantage: bandwidth consumption');
add('disadvantage: memory usage');
add('disadvantage: CPU processing time');

add('Place in the following order');
add('Third precedence');
add('Fourth precedence');
add('– not scored –');
add('First precedence');
add('Second precedence');

add('Place the options in the following order');
add('This is where the details of the neighboring routers can be found. ');
add('This is the algorithm used by OSPF.');
add('All the routers are in the backbone area. ');
add('– not scored –');
add('This is where you can find the topology table. ');
add('– not scored –');

add('Place the options in the following order:');
add('Neighbor ID of 3.3.3.3');
add('– not scored – ');
add('Routing Process “ospf 10” with ID 1.1.1.1');
add('Routing Protocol is “ospf 10”');
add('BW 1544 Kbit/sec');

add('Match the OSPF state with the order in which they occur');
add('second state');
add('– not scored –');
add('seventh state');
add('fifth state');
add('first state');
add('fourth state');
add('– not scored –');
add('third state');
add('sixth state');


//Tetst 9 - 10
//Test 9

add('A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)',
    'Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.0',
    'Router1(config)# access-list 10 permit host 192.168.15.23');
add('Refer to the exhibit. A router has an existing ACL that permits all traffic from the 172.16.0.0 network. The administrator attempts to add a new ACE to the ACL that denies packets from host 172.16.0.1 and receives the error message that is shown in the exhibit. What action can the administrator take to block packets from host 172.16.0.1 while still permitting all other traffic from the 172.16.0.0 network?',
    'Manually add the new deny ACE with a sequence number of 5.');
add('Why is the ACL not working?',
    'The ACL is applied to the wrong interface.');
add('Which statement describes a characteristic of standard IPv4 ACLs?',
    'They filter traffic based on source IP addresses only.');
add('Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)',
    'R1(config)# interface gi0/0',
    'access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20');
add('What are two possible uses of access control lists in an enterprise network? (Choose two.)',
    'limiting debug outputs',
    'controlling virtual terminal access to routers');
add('An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL?',
    'R1(config-line)# access-class 1 in');
add('Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)',
    'Place extended ACLs close to the source IP address of the traffic.',
    'Place standard ACLs close to the destination IP address of the traffic.',
    'Filter unwanted traffic before it travels onto a low-bandwidth link.');
add('Which three implicit access control entries are automatically added to the end of an IPv6 ACL? (Choose three.)',
    'deny ipv6 any any',
    'permit icmp any any nd-ns',
    'permit icmp any any nd-na');
add('Which two characteristics are shared by both standard and extended ACLs? (Choose two.)',
    'Both can be created by using either a descriptive name or number.',
    'Both include an implicit deny as a final ACE.');
add('Which method would allow the network administrator to modify the ACL and include FTP transfers from any source IP address?',
    'R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# no access-list 105');
add('What two functions describe uses of an access control list? (Choose two.)',
    'ACLs provide a basic level of security for network access.',
    'ACLs can control which areas a host can access on a network.');
add('Which feature is unique to IPv6 ACLs when compared to those of IPv4 ACLs?',
    'an implicit permit of neighbor discovery packets');
add('Which three statements describe ACL processing of packets? (Choose three.)',
    'Each statement is checked only until a match is detected or until the end of the ACE list.',
    'An implicit deny any rejects any packet that does not match any ACE.',
    'A packet can either be rejected or forwarded as directed by the ACE that is matched.');
add('Which statement describes a difference between the operation of inbound and outbound ACLs?',
    'Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed.');
add('What is the only type of ACL available for IPv6?',
    'named extended');
add('Which IPv6 ACL command entry will permit traffic from any host to an SMTP server on network 2001:DB8:10:10::/64?',
    'permit tcp any host 2001:DB8:10:10::100 eq 25');
add('Refer to the exhibit. The IPv6 access list LIMITED_ACCESS is applied on the S0/0/0 interface of R1 in the inbound direction. Which IPv6 packets from the ISP will be dropped by the ACL on R1?',
    'ICMPv6 packets that are destined to PC1');
add('If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?',
    '8');
add('Which IPv4 address range covers all IP addresses that match the ACL filter specified by 172.16.2.0 with wildcard mask 0.0.1.255?',
    '172.16.2.0 to 172.16.3.255');
add('What packets would match the access control list statement that is shown below? +++++ access-list 110 permit tcp 172.16.0.0 0.0.0.255 any eq 22 +++++',
    'SSH traffic from the 172.16.0.0 network to any destination network');
add('What single access list statement matches all of the following networks?',
    'access-list 10 permit 192.168.16.0 0.0.3.255');
add('What is a limitation when utilizing both IPv4 and IPv6 ACLs on a router?',
    'Both IPv4 and IPv6 ACLs can be configured on a single device, but cannot share the same name.');
add('In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?',
    'when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface');
add('What method is used to apply an IPv6 ACL to a router interface?',
    'the use of the ipv6 traffic-filter command');
add('Refer to the exhibit. What will happen to the access list 10 ACEs if the router is rebooted before any other commands are implemented?',
    'The ACEs of access list 10 will be renumbered.');
add('Refer to the exhibit. What is the result of adding the established argument to the end of the ACE?',
    'Any TCP traffic is allowed to reach the 192.168.254.0 255.255.254.0 network if it is in response to an originated request.');

//Test 10

add('Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?',
    'Add the ipv6 dhcp relay command to interface Fa0/0.');
add('What is the reason why the DHCPREQUEST message is sent as a broadcast during the DHCPv4 process?',
    'to notify other DHCP servers on the subnet that the IP address was leased');
add('A company uses DHCP servers to dynamically assign IPv4 addresses to employee workstations. The address lease duration is set as 5 days. An employee returns to the office after an absence of one week. When the employee boots the workstation, it sends a message to obtain an IP address. Which Layer 2 and Layer 3 destination addresses will the message contain?',
    'FF-FF-FF-FF-FF-FF and 255.255.255.255');
add('Type a command to exclude the first fifteen useable IP addresses from a DHCPv4 address pool of the network 10.0.15.0/24. Router(config)# ip dhcp',
    'excluded-address 10.0.15.1 10.0.15.15');
add('Refer to the exhibit. A network administrator is implementing stateful DHCPv6 operation for the company. However, the clients are not using the prefix and prefix-length information that is configured in the DHCP pool. The administrator issues a show ipv6 interface command. What could be the cause of the problem?',
    'The router is configured for stateless DHCPv6 operation.');
add('A network engineer is troubleshooting hosts on a LAN that are not being assigned an IPv4 address from a DHCP server after a new Ethernet switch has been installed on the LAN. The configuration of the DHCP server has been confirmed as correct and the clients have network connectivity to other networks if a static IP address is configured on each one. What step should the engineer take next to solve the issue?',
    'Confirm that ports on the Layer 2 LAN switch are configured as edge ports.');
add('A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?',
    'It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.');
add('Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?',
    'ICMPv6');
add('A network administrator is implementing DHCPv6 for the company. The administrator configures a router to send RA messages with M flag as 1 by using the interface command ipv6 nd managed-config-flag. What effect will this configuration have on the operation of the clients?',
    'Clients must use all configuration information that is provided by a DHCPv6 server.');
add('Under which two circumstances would a router usually be configured as a DHCPv4 client? (Choose two.)',
    'The router is intended to be used as a SOHO gateway.',
    'This is an ISP requirement.');
add('A company uses the SLAAC method to configure IPv6 addresses for the employee workstations. Which address will a client use as its default gateway?​',
    'the link-local address of the router interface that is attached to the network');
add('Refer to the exhibit. Based on the output that is shown, what kind of IPv6 addressing is being configured?',
    'stateless DHCPv6');
add('A company implements the stateless DHCPv6 method for configuring IPv6 addresses on employee workstations. After a workstation receives messages from multiple DHCPv6 servers to indicate their availability for DHCPv6 service, which message does it send to a server for configuration information?',
    'DHCPv6 INFORMATION-REQUEST');
add('An administrator issues the commands: Router(config)# interface g0/1 Router(config-if)# ip address dhcp What is the administrator trying to achieve?',
    'configuring the router to obtain IP parameters from a DHCPv4 server');
add('Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?',
    '...<br>default-router 192.168.100.1');
add('Which DHCPv4 message will a client send to accept an IPv4 address that is offered by a DHCP server?',
    'broadcast DHCPREQUEST');
add('How many IP addresses has the DHCP server leased and what is the number of DHCP pools configured? (Choose two.)',
    'one pool',
    'three leases');
add('Refer to the exhibit. A network administrator is implementing the stateless DHCPv6 operation for the company. Clients are configuring IPv6 addresses as expected. However, the clients are not getting the DNS server address and the domain name information configured in the DHCP pool. What could be the cause of the problem?',
    'The router is configured for SLAAC DHCPv6 operation.');
add('A host on the 10.10.100.0/24 LAN is not being assigned an IPv4 address by an enterprise DHCP server with the address 10.10.200.10/24. What is the best way for the network engineer to resolve this problem?',
    'Issue the command ip helper-address 10.10.200.10 on the router interface that is the 10.10.100.0/24 gateway.');
add('Which is a DHCPv4 address allocation method that assigns IPv4 addresses for a limited lease period?',
    'dynamic allocation');
add('An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?',
    'stateless DHCPv6');
add('A company uses the method SLAAC to configure IPv6 addresses for the workstations of the employees. A network administrator configured the IPv6 address on the LAN interface of the router. The interface status is UP. However, the workstations on the LAN segment did not obtain the correct prefix and prefix length. What else should be configured on the router that is attached to the LAN segment for the workstations to obtain the information?​',
    'R1(config)# ipv6 unicast-routing');
add('Which address does a DHCPv4 server target when sending a DHCPOFFER message to a client that makes an address request?',
    'client hardware address');
add('What is an advantage of configuring a Cisco router as a relay agent?',
    'It can provide relay services for multiple UDP services.');
add('How does an IPv6 client ensure that it has a unique address after it configures its IPv6 address using the SLAAC allocation method?',
    'It sends an ICMPv6 Neighbor Solicitation message with the IPv6 address as the target IPv6 address.');
add('What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?',
    'the MAC address of the IPv6 enabled interface');
add('As a DHCPv4 client lease is about to expire, what is the message that the client sends the DHCP server?',
    'DHCPREQUEST');


/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

//add('helper label');

add('192.168.15.65 255.255.255.240 ==> the first valid host address in a subnet');
add('192.168.15.144 0.0.0.15 ==> subnetwork address of a subnet with 14 valid host addreses');
add('host 192.168.15.2 ==> all IP address bits must match exactly');
add('192.168.5.0 0.0.3.255 ==> hosts in a subnet with SM 255.255.252.0');
add('192.168.3.64 0.0.0.7 ==> address with a subnet 255.255.255.248');
add('Stateless: enabled in RA messages with the ipv6 nd other-config-flag command');
add('Stateless: clients send only DHCPv6 INFORMATION-REQUEST messages to the server');
add('Stateless: enabled on the client with the ipv6 address autoconfig command');
add('Stateful: the M flag is set to 1 in RA messages');
add('Stateful: uses the address command to create a pool of addresses for clients');
add('Stateful: enabled on the client with the ipv6 address dhcp command');
add('1) Exclude IP addresses');
add('2) Configure a DHCP pool');
add('3) Define the default gateway router');

//Chapter 11

add('Which version of NAT allows many hosts inside a private network to simultaneously use a single inside global address for connecting to the Internet?',
    'PAT');
add('What is the group of public IPv4 addresses used on a NAT-enabled router known as?',
    'inside global addresses');
add('What problem is causing PC-A to be unable to communicate with the Internet?',
    'The NAT interfaces are not correctly assigned.');
add('What is a disadvantage of NAT?',
    'There is no end-to-end addressing.');
add('Which statement accurately describes dynamic NAT?',
    'It provides an automated mapping of inside local to inside global IP addresses.');
add('When dynamic NAT without overloading is being used, what happens if seven users attempt to access a public server on the Internet when only six addresses are available in the NAT pool?',
    'The request to the server for the seventh user fails.');
add('What is the purpose of port forwarding?',
    'Port forwarding allows an external user to reach a service on a private IPv4 address that is located inside a LAN.');
add('Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?',
    'Interface S0/0/0 should be configured with the command ip nat outside.');
add('When NAT is employed in a small office, which address type is typically used for hosts on the local LAN?',
    'private IP addresses');
add('Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?',
    'defines which addresses can be translated');
add('A network administrator configures the border router with the command R1(config)# ip nat inside source list 4 pool corp. What is required to be configured in order for this particular command to be functional?',
    'a NAT pool named corp that defines the starting and ending public IP addresses');
add('Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?',
    'NAT-POOL2 is not bound to ACL 1.');
add('A network engineer has configured a router with the command ip nat inside source list 4 pool corp overload. Why did the engineer use the overload option?',
    'The company has more private IP addresses than available public IP addresses.');
add('Refer to the exhibit. What will be the effect of entering the command that is shown in the exhibit on R2 as part of the dynamic NAT configuration?',
    'It will bind NAT-POOL1 with ACL 1.');
add('Which configuration would be appropriate for a small business that has the public IP address of 209.165.200.225/30 assigned to the external interface on the router that connects to the Internet?',
    'access-list 1 permit 10.0.0.0 0.255.255.255' +
    '<br>ip nat inside source list 1 interface serial 0/0/0 overload');
add('Which type of NAT maps a single inside local address to a single inside global address?',
    'static');
add('Typically, which network device would be used to perform NAT for a corporate environment?',
    'router');
add('Several key servers in an organization must be directly accessible from the Internet. What addressing policy should be implemented for these servers?',
    'Assign static internal addresses and public external addresses to each of the servers.');
add('What is a characteristic of unique local addresses?',
    'They allow sites to be combined without creating any address conflicts.');
add('Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?',
    'PAT using an external interface');
add('Based on the configuration and the output shown, what can be determined about the NAT status within the organization?',
    'Not enough information is given to determine if both static and dynamic NAT are working.');
add('What are two required steps to configure PAT? (Choose two.)',
    'Define a pool of global addresses to be used for overload translation.',
    'Identify the inside interface.');
add('Using NAT terminology, what is the address of the source host on a private network as seen from inside the network?',
    'inside local');
add('What is an advantage of deploying IPv4 NAT technology for internal hosts in an organization?',
    'provides flexibility in designing the IPv4 addressing scheme');
add('A network administrator is configuring a static NAT on the border router for a web server located in the DMZ network. The web server is configured to listen on TCP port 8080. The web server is paired with the internal IP address of 192.168.5.25 and the external IP address of 209.165.200.230. For easy access by hosts on the internet, external users do not need to specify the port when visiting the web server. Which command will configure the static NAT?',
    'R1(config)# ip nat inside source static tcp 192.168.5.25 8080 209.165.200.230 80');
add('NAT overload is also know as __Port Address Translation__',
    'Port Address Translation');
add('What is the primary purpose of NAT?',
    'conserve IPv4 addresses');


//Final Test

add('What are two features of a link-state routing protocol? (Choose two.)',
    'Routers send triggered updates in response to a change.',
    'Routers create a topology of the network by using information from other routers. ');
add('In IPv6, all routes are level   ” 1 ”  ultimate routes.',
    '1');
add('Which switching method drops frames that fail the FCS check?',
    'store-and-forward switching');
add('Which summary IPv6 static route statement can be configured to summarize only the routes to networks 2001:db8:cafe::/58 through 2001:db8:cafe:c0::/58?',
    'ipv6 route 2001:db8:cafe::/56 S0/0/0');
add('Refer to ther exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?',
    '3');
add('When a Cisco switch receives untagged frames on a 802.1Q trunk port, which VLAN ID is the traffic switched to by default?',
    'native VLAN ID');
add('A college marketing department has a networked storage device that uses the IP address 10.18.7.5, TCP port 443 for encryption, and UDP port 4365 for video streaming. The college already uses PAT on the router that connects to the Internet. The router interface has the public IP address of 209.165.200.225/30. The IP NAT pool currently uses the IP addresses ranging from 209.165.200.228-236. Which configuration would the network administrator add to allow this device to be accessed by the marketing personnel from home?',
    'ip nat inside source static tcp 10.18.7.5 443 209.165.200.225 443<br>' +
    'ip nat inside source static udp 10.18.7.5 4365 209.165.200.225 4365');
add('Which statement describes a route that has been learned dynamically?',
    'It is automatically updated and maintained by routing protocols.');
add('A network administrator is explaining to a junior colleague the use of the lt and gt keywords when filtering packets using an extended ACL. Where would the lt or gt keywords be used?',
    'in an IPv4 extended ACL that allows packets from a range of TCP ports destined for a specific network device');
add('Refer to the exhibit. How did the router obtain the last route that is shown?',
    'Another router in the same organization provided the default route by using a dynamic routing protocol.');
add('Refer to the exhibit. A Layer 3 switch routes for three VLANs and connects to a router for Internet connectivity. Which two configurations would be applied to the switch? (Choose two.)',
    '(config)# interface gigabitethernet 1/1<br>' +
    '(config-if)# no switchport',
    '(config)# ip routing');
add('A network contains multiple VLANs spanning multiple switches. What happens when a device in VLAN 20 sends a broadcast Ethernet frame?',
    'Only devices in VLAN 20 see the frame.');
add('Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)',
    'ICMP message type',
    'destination UDP port number');
add('Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?',
    'Change the destination network and mask to 0.0.0.0 0.0.0.0');
add('How is the router ID for an OSPFv3 router determined?',
    'the highest IPv4 address on an active interface');
add('Two employees in the Sales department work different shifts with their laptop computers and share the same Ethernet port in the office. Which set of commands would allow only these two laptops to use the Ethernet port and create violation log entry without shutting down the port if a violation occurs?',
    '5 lines');
add('Which two factors are important when deciding which interior gateway routing protocol to use? (Choose two.)',
    'speed of convergence',
    'scalability');
add('Refer to the exhibit. Which type of route is 172.16.0.0/16?',
    'level 1 parent route');
add('What caused the following error message to appear?01:11:12: %PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/8, putting Fa0/8 in err-disable state01:11:12: %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred, caused by MAC address 0011.a0d4.12a0 on port FastEthernet0/8.01:11:13: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/8, changed state to down01:11:14: %LINK-3-UPDOWN: Interface FastEthernet0/8, changed state to down',
    'Port security was enabled on the switch port, and an unauthorized connection was made on switch port Fa0/8.');
add('Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)',
    'In a switched network, they are mostly configured between switches at the core and distribution layers.',
    'They are not associated with a particular VLAN.');
add('A network administrator is adding ACLs to a new IPv6 multirouter environment. Which IPv6 ACE is automatically added implicitly at the end of an ACL so that two adjacent routers can discover each other?',
    'permit icmp any any nd-na');
add('What does the cost of an OSPF link indicate?',
    'A lower cost indicates a better path to the destination than a higher cost does.');
add('Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)',
    'outbound',
    'R1 Gi0/1.12');
add('On a switch that is configured with multiple VLANs, which command will remove only VLAN 100 from the switch?',
    'Switch(config)# no vlan 100');
add('A router needs to be configured to route within OSPF area 0. Which two commands are required to accomplish this? (Choose two.)',
    'RouterA(config)# router ospf 1',
    'RouterA(config-router)# network 192.168.2.0 0.0.0.255 area 0');
add('What is a function of the distribution layer?',
    'interconnection of large-scale networks in wiring closets');
add('A small-sized company has 20 workstations and 2 servers. The company has been assigned a group of IPv4 addresses 209.165.200.224/29 from its ISP. What technology should the company implement in order to allow the workstations to access the services over the Internet?',
    'dynamic NAT');
add('Which three requirements are necessary for two OSPFv2 routers to form an adjacency? (Choose three.)',
    'The link interface subnet masks must match.',
    'The two routers must include the inter-router link network in an OSPFv2 network command.',
    'The OSPF hello or dead timers on each router must match.');
add('Which three pieces of information does a link-state routing protocol use initially as link-state information for locally connected links? (Choose three.)',
    'the cost of that link',
    'the type of network link',
    'the link router interface IP address and subnet mask');
add('What is a disadvantage of NAT?',
    'There is no end-to-end addressing.');
add('Refer to the exhibit. The partial configuration that is shown was used to configure router on a stick for VLANS 10, 30, and 50. However, testing shows that there are some connectivity problems between the VLANs. Which configuration error is causing this problem?',
    'The wrong VLAN has been configured on subinterface Fa0/0.50.');
add('Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?',
    'The ip helper-address command was applied on the wrong interface.');
add('What best describes the operation of distance vector routing protocols?',
    'They send their routing tables to directly connected neighbors.');
add('A network administrator is using the router-on-a-stick method to configure inter-VLAN routing. Switch port Gi1/1 is used to connect to the router. Which command should be entered to prepare this port for the task?',
    'Switch(config)# interface gigabitethernet 1/1' +
    '<br>Switch(config-if)# switchport mode trunk');
add('Which three advantages are provided by static routing? (Choose three.)',
    'The path a static route uses to send data is known.',
    'Static routing does not advertise over the network, thus providing better security.',
    'Static routing typically uses less network bandwidth and fewer CPU operations than dynamic routing does.');
add('When configuring a switch to use SSH for virtual terminal connections, what is the purpose of the crypto key generate rsa command?',
    'create a public and private key pair');
add('Which information does a switch use to populate the MAC address table?',
    'the source MAC address and the incoming port');
add('Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?',
    'The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation.');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. What is the problem preventing PC0 and PC1 from communicating with PC2 and PC3?',
    'The serial interfaces of the routers are in different subnets.');
add('Which command will create a static route on R2 in order to reach PC B?',
    'R1(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1');
add('Which problem is evident if the show ip interface command shows that the interface is down and the line protocol is down?',
    'A cable has not been attached to the port.');
add('Which three values or sets of values are included when creating an extended access control list entry? (Choose three.)',
    'access list number between 100 and 199',
    'source address and wildcard mask',
    'destination address and wildcard mask');
add('A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?',
    '0.0.1.255');
add('Which kind of message is sent by a DHCP client when its IP address lease has expired?',
    'a DHCPREQUEST unicast message');
add('What happens immediately after two OSPF routers have exchanged hello packets and have formed a neighbor adjacency?',
    'They exchange abbreviated lists of their LSDBs');
add('What benefit does NAT64 provide?',
    'It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses.');
add('What is the purpose of setting the native VLAN separate from data VLANs?',
    'A separate VLAN should be used to carry uncommon untagged frames to avoid bandwidth contention on data VLANs.');
add('Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?',
    'ip address dhcp');
add('Which statement is correct about IPv6 routing?',
    'IPv6 uses the link-local address of neighbors as the next-hop address for dynamic routes.');
add('A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?',
    'ip route 172.16.32.0 255.255.224.0 S0/0/0 200');
add('Refer to the exhibit. How many broadcast and collision domains exist in the topology?',
    '5 broadcast domains and 10 collision domains');
add('Which two commands can be used to verify the content and placement of access control lists? (Choose two.)',
    'show access-lists',
    'show running-config');
add('Which type of traffic would most likely have problems when passing through a NAT device?',
    'IPsec');
add('Which keyword is displayed on the web browser?',
    'Welldone!');
add('Refer to the exhibit. What summary static address would be configured on R1 to advertise to R3?',
    '192.168.0.0/22');
add('Static routes are configured by the use of the ” ip route” global configuration command.',
    'ip route');
add('Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? (Choose three.)',
    'dynamic desirable – dynamic auto',
    'dynamic desirable – dynamic desirable',
    'dynamic desirable – trunk');
add('The OSPF Type 1 packet is the _________ packet.',
    'hello');
add('Which value represents the “trustworthiness” of a route and is used to determine which route to install into the routing table when there are multiple routes toward the same destination?',
    'administrative distance');
add('The default administrative distance for a static route is',
    '1');
add('Static routes are configured by the use of the global configuration command',
    'ip route');
add('Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?',
    'Router R4 will become the DR and router R3 will become the BDR.');
add('What is the purpose of an access list that is created as part of configuring IP address translation?',
    'The access list defines the private IP addresses that are to be translated.');
add('The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)',
    '-access-list 5 permit 10.7.0.0 0.0.0.31',
    '-access-class 5 in');
add('While analyzing log files, a network administrator notices reoccurring native VLAN mismatches. What is the effect of these reoccurring errors?',
    'The control and management traffic on the error-occurring trunk port is being misdirected or dropped.');
add('Which two characteristics describe the native VLAN? (Choose two.)',
    'The native VLAN provides a common identifier to both ends of a trunk.',
    'The native VLAN traffic will be untagged across the trunk link.');
add('Refer to the exhibit. The Branch Router has an OSPF neighbor relationship with the HQ router over the 198.51.0.4/30 network. The 198.51.0.8/30 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/1/1 100 was issued on Branch and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?',
    'Change the administrative distance to 120.');
add('Refer to the exhibit. An attacker on PC X sends a frame with two 802.1Q tags on it, one for VLAN 40 and another for VLAN 12. What will happen to this frame?',
    'SW-A will remove both tags and forward the rest of the frame across the trunk link, where SW-B will forward the frame to hosts on VLAN 40.');
add('Which statement is true about the difference between OSPFv2 and OSPFv3?',
    'OSPFv3 routers do not need to have matching subnets to form neighbor adjacencies.');
add('What are two ways of turning off DTP on a trunk link between switches? (Choose two.)',
    'Configure attached switch ports with the nonegotiate command option.',
    'Place the two attached switch ports in access mode.');
add('Why would an administrator use a network security auditing tool to flood the switch MAC address table with fictitious MAC addresses?',
    'to determine which ports are not correctly configured to prevent MAC address flooding');
add('A new network policy requires an ACL to deny HTTP access from all guests to a web server at the main office. All guests use addressing from the IPv6 subnet 2001:DB8:19:C::/64. The web server is configured with the address 2001:DB8:19:A::105/64. Implementing the NoWeb ACL on the interface for the guest LAN requires which three commands? (Choose three.)',
    'deny tcp any host 2001:DB8:19:A::105 eq 80',
    'permit ipv6 any any',
    'ipv6 traffic-filter NoWeb in');
add('An OSPF router has three directly connected networks; 172.16.0.0/16, 172.16.1.0/16, and 172.16.2.0/16. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?',
    'router(config-router)# network 172.16.1.0 0.0.255.255 area 0');
add('Refer to the exhibit. Which type of route is 172.16.0.0/16?',
    'level 1 parent route');
add('Refer to the exhibit. Which type of IPv6 static route is configured in the exhibit?',
    'recursive static route');
add('Which subnet mask would be used as the classful mask for the IP address 192.135.250.27?',
    '255.255.255.0');
add('Which subnet mask would be used as the classful mask for the IP address 128.107.52.27?',
    '255.255.0.0');
add('Refer to the exhibit. A small business uses VLANs 8, 20, 25, and 30 on two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?',
    '5');
add('The buffers for packet processing and the running configuration file are temporarily stored in which type of router memory?',
    'RAM');
add('A network technician is configuring port security on switches. The interfaces on the switches are configured in such a way that when a violation occurs, packets with unknown source address are dropped and no notification is sent. Which violation mode is configured on the interfaces?',
    'protect');
add('A standard ACL has been configured on a router to allow only clients from the 10.11.110.0/24 network to telnet or to ssh to the VTY lines of the router. Which command will correctly apply this ACL?',
    'access-group 11 in');
add('What address will summarize the LANs attached to routers 2-A and 3-A and can be configured in a summary static route to advertise them to an upstream neighbor?',
    '10.0.0.0/21');
add('A security specialist designs an ACL to deny access to a web server from all sales staff. The sales staff are assigned addressing from the IPv6 subnet 2001:db8:48:2c::/64. The web server is assigned the address 2001:db8:48:1c::50/64. Configuring the WebFilter ACL on the LAN interface for the sales staff will require which three commands? (Choose three.)',
    'deny tcp host 2001:db8:48:1c::50 any eq 80',
    'deny tcp any host 2001:db8:48:1c::50 eq 80',
    'deny ipv6 any any');
add('To enable RIP routing for a specific subnet, the configuration command network 192.168.5.64 was entered by the network administrator. What address, if any, appears in the running configuration file to identify this network?',
    '192.168.5.0');
add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the interval web server from all teaching assistants has been implemented in the Board Office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implement the ACL, access to all servers is denied. What is the problem?',
    'named ACLs requite the use of port numbers');
add('Refer to the exhibit. Assuming that the routing tables are up to date and no ARP messages are needed, after a packet leaves H1, how many times is the L2 header rewritten in the path to H2?',
    '2');
add('a router learns of multiple toward the same destination. Which value in a routing table replesents the trustworthiness of learned routes and is used by the router to determine which route to install into the routing table for specific situation?',
    'metric');
add('What is the minimum configuration for a router interface that is participating in IPv6 routing?',
    'to have only a link-local IPv6 address');
add('Which two statements are true about half-duplex and full-duplex communications? (Choose two.)',
    'Full duplex offers 100 percent potential use of the bandwidth.',
    'Full duplex allows both ends to transmit and receive simultaneously.');
add('The acronym describes the type of traffic that has strict QoS requirements and utilizes a one-way overall delay less than 150 ms across the network.',
    'VoIP');
add('Which two commands should be implemented to return a Cisco 3560 trunk port to its default configuration? (Choose two.)',
    'S1(config-if)# no switchport trunk native vlan',
    'S1(config-if)# no switchport trunk allowed vlan');
add('Which command will enable auto-MDIX on a device?',
    'S1(config-if)# mdix auto');
add('What is the effect of issuing the passive-interface default command on a router that is configured for OSPF?',
    'It prevents OSPF messages from being sent out any OSPF-enabled interface.');
add('A network administrator is implementing a distance vector routing protocol between neighbors on the network. In the context of distance vector protocols, what is a neighbor?',
    'routers that share a link and use the same routing protocol');
add('Refer to the exhibit. A network administrator has just configured address translation and is verifying the configuration. What three things can the administrator verify? (Choose three.)',
    'The name of the NAT pool is refCount.',
    'A standard access list numbered 1 was used as part of the configuration process.',
    'Address translation is working.');
add('Which two methods can be used to provide secure management access to a Cisco switch? (Choose two.)',
    'Configure specific ports for management traffic on a specific VLAN.',
    'Configure SSH for remote management.');
add('Refer to the exhibit. Which highlighted value represents a specific destination network in the routing table?',
    '172.16.100.128');
add('Refer to the exhibit. An ACL preventing FTP and HTTP access to the internal web server from all teaching assistants has been implemented in the Board office. The address of the web server is 172.20.1.100 and all teaching assistants are assigned addresses in the 172.21.1.0/24 network. After implementing the ACL, access to all servers is denied. What is the problem?',
    'Named ACLs require the use of port numbers.');
add('Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?',
    '3');
add('Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?',
    'Source MAC: 00E0.FE91.7799<br>' +
    'Source IP: 10.1.1.10');
add('Which network design may be recommended for a small campus site that consists of a single building with a few users?',
    'a collapsed core network design');
add('Which type of router memory temporarily stores the running configuration file and ARP table?',
    'RAM');
add('A network administrator is configuring an ACL with the command access-list 10 permit 172.16.32.0 0.0.15.255. Which IPv4 address matches the ACE?',
    '172.16.20.2');
add('What are two reasons that will prevent two routers from forming an OSPFv2 adjacency? (Choose two.)',
    'mismatched OSPF Hello or Dead timers',
    'mismatched subnet masks on the link interfaces');
add('Which three addresses could be used as the destination address for OSPFv3 messages? (Choose three.)',
    'FF02::5',
    'FE80::1',
    'CAFE::0');
add('Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?​',
    '65');
add('The network address 172.18.9.128 with netmask 255.255.255.128 is matched by which wildcard mask?',
    '0.0.0.127');
add('Refer to the exhibit. A small business uses VLANs 2, 3, 4, and 5 between two switches that have a trunk link between them. What native VLAN should be used on the trunk if Cisco best practices are being implemented?',
    '5');
add('A router learns of multiple routes toward the same destination. Which value in a routing table represents the trustworthiness of learned routes and is used by the router to determine which route to install into the routing table for this specific situation?',
    'administrative distance');
add('Which value in a routing table represents trustworthiness and is used by the router to determine which route to install into the routing table when there are multiple routes toward the same destination?',
    'administrative distance');
add('A network technician has been asked to secure all switches in the campus network. The security requirements are for each switch to automatically learn and add MAC addresses to both the address table and the running configuration. Which port security configuration will meet these requirements?',
    'switch port sticky');
add('Refer to the exhibit. What is the OSPF cost to reach the R2 LAN 172.16.2.0/24 from R1?',
    '74');

// 2016
// Cisco Exam v5.1 + v5.0
/*TEST 4*/
add('What are two reasons for physical layer protocols to use frame encoding techniques? (Choose two.)',
    'to identify where the frame starts and ends', 'to distinguish data bits from control bits');
add('Which statement is correct about multimode fiber?',
    'SC-SC patch cords are used with multimode fiber cables.');
add('Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?',
    'data link');
add('The throughput of a FastEthernet network is 80 Mb/s. The traffic overhead for establishing sessions, acknowledgments, and encapsulation is 15 Mb/s for the same time period. What is the goodput for this network?',
    '65 Mb/s');
add('A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)',
    'RFI​, EMI');
add('What is the purpose of the FCS field in a frame?',
    'to determine if errors occurred in the transmission and reception');
add('As data travels on the media in a stream of 1s and 0s how does a receiving node identify the beginning and end of a frame?​',
    'The transmitting node inserts start and stop bits into the frame.');
add('Which statement describes signaling at the physical layer?',
    'Sending the signals asynchronously means that they are transmitted without a clock signal.');
add('A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)',
    'coverage area', 'interference', 'security');
add('What is one main characteristic of the data link layer?',
    'It shields the upper layer protocol from being aware of the physical medium to be used in the communication.');
add('What is one advantage of using fiber optic cabling rather than copper cabling?',
    'It is able to carry signals much farther than copper cabling.');
add('What acronym is used to reference the data link sublayer that identifies the network layer protocol encapsulated in the frame?',
    'LLC');
add('Why are two strands of fiber used for a single fiber optic connection?',
    'They allow for full-duplex connectivity.');
add('Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​',
    '1 – rollover, 2 – straight-through, 3 – crossover');
add('What is true concerning physical and logical topologies?',
    'Logical topologies determine the media access control method used.');
add('The term “Bandwidth” indicates the capacity of a medium to carry data and it is typically measured in kilobits per second (kb/s) or megabits per second (Mb/s).',
    'Bandwidth');
add('Refer to the exhibit. What is wrong with the displayed termination?',
    'The untwisted length of each wire is too long.');
add('10,000,000,000 b/s can also be written as “10” Gb/s.',
    '10');
add('What are two characteristics of 802.11 wireless networks? (Choose two.)',
    'Collisions can exist in the networks.', 'They use CSMA/CA technology.');
add('A network administrator is required to upgrade wireless access to end users in a building. To provide data rates up to 1.3 Gb/s and still be backward compatible with older devices, which wireless standard should be implemented?',
    '802.11ac');
add('How is the magnetic field cancellation effect enhanced in UTP cables?',
    'by increasing and varying the number of twists in each wire pair');
add('What is true concerning physical and logical topologies?',
    'Logical topologies refer to how a network transfers data between devices.');
add('What is indicated by the term throughput?',
    'the measure of the bits transferred across the media over a given period of time');
add('Which characteristic describes crosstalk?',
    'the distortion of the transmitted messages from signals carried in adjacent wires');
add('What technique is used with UTP cable to help protect against signal interference from crosstalk?',
    'twisting the wires together into pairs');
add('Which type of connector does a network interface card use?',
    'RJ-45');
add('What are two services performed by the data link layer of the OSI model? (Choose two.)',
    'It accepts Layer 3 packets and encapsulates them into frames.',
    'It provides media access control and performs error detection.');
add('Which method of data transfer allows information to be sent and received at the same time?',
    'full duplex');
add('Which statement describes an extended star topology?',
    'End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.');
add('Which statement describes the media access control methods that are used by the networks in the exhibit?',
    'Network 1 uses CSMA/CD and Network 3 uses CSMA/CA.');
add('What is contained in the trailer of a data-link frame?',
    'error detection');
add('What is the function of the CRC value that is found in the FCS field of a frame?',
    'to verify the integrity of the received frame');

/*TEST 5*/
add('A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?',
    'It will send an ARP request for the MAC address of the default gateway.');
add('Which address or combination of addresses does a Layer 3 switch use to make forwarding decisions?',
    'MAC and IP addresses');
add('What are two potential network problems that can result from ARP operation? (Choose two.)',
    'On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.',
    'Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.');
add('Launch PT Hide and Save PT' +
    'Open the PT Activity. Perform the tasks in the activity instruction and then answer the question.' +
    'What destination address will PC1 include in the destination address field of the Ethernet frame that it sends to PC2?',
    '0030.a3e5.0401');
add('How does adding an Ethernet line card affect the form factor of a switch?',
    'by expanding the port density');
add('Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)',
    'Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another',
    'Destination IP addresses in a packet header remain constant along the entire path to a target host');
add('What is the Layer 2 multicast MAC address that corresponds to the Layer 3 IPv4 multicast address 224.139.34.56?',
    '01-00-5E-0B-22-38');
add('What is the purpose of the preamble in an Ethernet frame?',
    'is used for timing synchronization');
add('A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?',
    'shared memory buffering');
add('A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)',
    'The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable',
    'The link between switches will work as full-duplex',
    'The link between the switches will work at the fastest speed that is supported by both switches');
add('Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?​',
    'PC2 will send an ARP reply with its MAC address.');
add('What is a characteristic of a contention-based access method?',
    'It is a nondeterministic method.');
add('What statement illustrates a drawback of the CSMA/CD access method?',
    'Collisions can decrease network performance.');
add('When would a switch record multiple entries for a single switch port in its MAC address table?',
    'when another switch is connected to the switch port');
add('Which two statements describe a fixed configuration Ethernet switch? (Choose two.)',
    'A fixed configuration switch may be stackable.',
    'The number of ports on the switch cannot be increased.');
add('Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)',
    'Logical link control is implemented in software.',
    'The data link layer uses LLC to communicate with the upper layers of the protocol suite.');
add('A network administrator issues the following commands on a Layer 3 switch:' +
    '<br>DLS1(config)# interface f0/3' +
    '<br>DLS1(config-if)# no switchport' +
    '<br>DLS1(config-if)# ip address 172.16.0.1 255.255.255.0' +
    '<br>DLS1(config-if)# no shutdown' +
    '<br>DLS1(config-if)# end' +
    '<br>What is the administrator configuring?',
    'a routed port');
add('Which statement is true about MAC addresses?',
    'The first three bytes are used by the vendor assigned OUI');
add('Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?',
    'The switch will forward the frame to all ports except port 4.');
add('The binary number 0000 1010 can be expressed as “A” in hexadecimal.',
    'A');
add('What are two features of ARP? (Choose two.)',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.',
    'If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What happens to runt frames received by a Cisco Ethernet switch?',
    'The frame is dropped.');
add('What are the two sizes (minimum and maximum) of an Ethernet frame? (Choose two.)',
    '64 bytes', '1518 bytes');
add('What statement describes Ethernet?',
    'It defines the most common LAN type in the world.');
add('What statement describes a characteristic of MAC addresses?',
    'They must be globally unique.');
add('Which destination address is used in an ARP request frame?',
    'FFFF.FFFF.FFFF');
add('What addressing information is recorded by a switch to build its MAC address table?',
    'the source Layer 2 address of incoming frames');
add('Which switching method uses the CRC value in a frame?',
    'store-and-forward');
add('What is auto-MDIX?',
    'a feature that detects Ethernet cable typ​e');
add('When a device is sending data to another device on a remote network, the Ethernet frame is sent to the MAC address of the default gateway.',
    'true');
add('The ARP table in a switch maps which two types of address together?',
    'Layer 3 address to a Layer 2 address');
add('A switch with a default configuration connects four hosts. The ARP table for host A is shown. What happens when host A wants to send an IP packet to host D?',
    'Host A sends out a broadcast of FF:FF:FF:FF:FF:FF. Every other host connected to the switch receives the broadcast and host D responds with its MAC address.');
add('The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?',
    'only hosts B, C, and router R1');
add('Which statement describes the treatment of ARP requests on the local link?',
    'They are received and processed by every device on the local network.');
add('A collision fragment, also known as a __RUNT__ frame, is a frame of fewer than 64 bytes in length.​',
    'RUNT');
add('On a Cisco switch, __port-based__ memory buffering is used to buffer frames in queues linked to specific incoming and outgoing ports.',
    'port-based');
add('ARP __spoofing__ is a technique that is used to send fake ARP messages to other hosts in the LAN. The aim is to associate IP addresses to the wrong MAC addresses.',
    'spoofing');

/*TEST 6*/
add('After troubleshooting a router, the network administrator wants to save the router configuration so that it will be used automatically the next time that the router reboots. What command should be issued?',
    'copy running-config startup-config');
add('Which IPv4 header field is responsible for defining the priority of the packet?',
    'differentiated services');
add('When connectionless protocols are implemented at the lower layers of the OSI model, what are usually used to acknowledge the data receipt and request the retransmission of missing data?',
    'upper-layer connection-oriented protocols');
add('Why is NAT not needed in IPv6?',
    'Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.');
add('A packet leaving PC-1 has to traverse “three” hops to reach PC-4',
    'three');
add('Which two interfaces will allow access via the VTY lines to configure the router? (Choose two.)',
    'WAN interfaces','LAN interfaces');
add('A technician is manually configuring a computer with the necessary IP parameters to communicate over the corporate network. The computer already has an IP address, a subnet mask, and a DNS server. What else has to be configured for Internet access?',
    'the default gateway address');
add('Which three commands are used to set up a password for a person who attaches a cable to a new router so that an initial configuration can be performed? (Choose three.)',
    'password cisco','line console 0','login');
add('Which statement about router interfaces is true?',
    'A configured and activated router interface must be connected to another device in order to operate.');
add('A technician is configuring a router that is actively running on the network. Suddenly, power to the router is lost. If the technician has not saved the configuration, which two types of information will be lost? (Choose two.)',
    'routing table','ARP cache');
add('How do hosts ensure that their packets are directed to the correct network destination?',
    'They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.');
add('What is a service provided by the Flow Label field of the IPv6 header?',
    'It informs network devices to maintain the same path for real-time application packets.');
add('During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?',
    'switch the packet to the directly connected interface');
add('In a router, “ROM ” is the nonvolatile memory where the diagnostic software, the bootup instructions, and a limited IOS are stored.',
    'ROM');
add('Which two commands can be used on a Windows host to display the routing table? (Choose two.)',
    'route print','netstat -r');
add('A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?',
    'The packet will be sent directly to the destination host.');
add('Which command displays a summary chart of all router interfaces, their IP addresses, and their current operational status?',
    'show ip interface brief');
add('Which two files, if found, are copied into RAM as a router with the default configuration register setting boots up? (Choose two.)',
    'startup configuration','IOS image file');
add('Does the router have enough RAM and flash memory to support the new IOS?',
    'The router has enough RAM and flash memory for the IOS upgrade.');
add('When would the Cisco IOS image held in ROM be used to boot the router?',
    'when the full IOS cannot be found');
add('Which type of static route that is configured on a router uses only the exit interface?',
    'directly connected static route');
add('Which characteristic of the network layer in the OSI model allows carrying packets for multiple types of communications among many hosts?',
    'the ability to operate without regard to the data that is carried in each packet');
add('What are two characteristics of IP? (Choose two.)',
    'does not require a dedicated end-to-end connection','operates independently of the network media');
add('When a connectionless protocol is in use at a lower layer of the OSI model, how is missing data detected and retransmitted if necessary?',
    'Upper-layer connection-oriented protocols keep track of the data received and can request retransmission from the upper-level protocols on the sending host.');
add('Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?',
    'Time-to-Live');
add('What IPv4 header field identifies the upper layer protocol carried in the packet?',
    'Protocol');
add('What is one advantage that the IPv6 simplified header offers over IPv4?',
    'efficient packet handling');
add('Refer to the exhibit. Which route from the PC1 routing table will be used to reach PC2?',
    'Network Destination 192.168.10.0 Netmask 255.255.255.0');
add('Refer to the exhibit. R1 receives a packet destined for the IP address 192.168.2.10. Out which interface will R1 forward the packet?',
    'Serial0/0/1');
add('What type of route is indicated by the code C in an IPv4 routing table on a Cisco router?',
    'directly connected route');
add('What routing table entry has a next hop address associated with a destination network?',
    'remote routes');
add('Which statement describes a hardware feature of a Cisco 1941 router that has the default hardware configuration?',
    'It has two types of ports that can be used to access the console.');
add('Following default settings, what is the next step in the router boot sequence after the IOS loads from flash?',
    'Locate and load the startup-config file from NVRAM.');
add('What are two types of router interfaces? (Choose two.)',
    'LAN','WAN');
add('Which two pieces of information are in the RAM of a Cisco router during normal operation? (Choose two.)',
    'Cisco IOS','IP routing table');
add('A router boots and enters setup mode. What is the reason for this?',
    'The configuration file is missing from NVRAM.');
add('What is the purpose of the startup configuration file on a Cisco router?',
    'to contain the commands that are used to initially configure a router on startup');
add('Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)',
    'line console 0','login','password cisco');
add('Which characteristic describes an IPv6 enhancement over IPv4?',
    'The IPv6 header is simpler than the IPv4 header is, which improves packet handling.');
add('Open the PT Activity. The enable password on all devices is cisco. Perform the tasks in the activity instructions and then answer the question. For what reason is the failure occurring?​',
    'SW1 does not have a default gateway configured.');


/*TEST 7*/
add('A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?',
    '10 segments');
add('A host device needs to send a large video file across the network while providing data communication to other users. Which feature will allow different communication streams to occur at the same time, without having a single data stream using all available bandwidth?',
    'multiplexing');
add('A technician wishes to use TFTP to transfer a large file from a file server to a remote router. Which statement is correct about this scenario?',
    'The file is segmented and then reassembled in the correct order at the destination, if necessary, by the upper-layer protocol.');
add('Which scenario describes a function provided by the transport layer?',
    'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.');
add('Which transport layer feature is used to guarantee session establishment?',
    'TCP 3-way handshake');
add('What is the complete range of TCP and UDP well-known ports?',
    '0 to 1023');
add('Which two TCP header fields are used to confirm receipt of data?',
    'acknowledgment number',
    'sequence number');
add('​What is a beneficial feature of the UDP transport protocol?',
    'fewer delays in transmission');
add('Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? (Choose two.)',
    'SYN','ACK');
add('What happens if the first packet of a TFTP transfer is lost?',
    'The TFTP application will retry the request if a reply is not received.');
add('Compared to UDP, what factor causes additional network overhead for TCP communication?',
    'network traffic that is caused by retransmissions');
add('Which factor determines TCP window size?',
    'the amount of data the destination can process at one time');
add('During a TCP session, a destination device sends an acknowledgment number to the source device. What does the acknowledgment number represent?',
    'the next byte that the destination expects to receive');
add('What is a socket?',
    'the combination of a source IP address and port number or a destination IP address and port number');
add('During a TCP session, the “SYN” field is used by the client to request communication with the server.',
    'SYN');
add('A total of 4 messages are exchanged during the TCP session termination process between the client and the server',
    '4');
add('A host device sends a data packet to a web server via the HTTP protocol. What is used by the transport layer to pass the data stream to the proper application on the server?',
    'destination port number');
add('What does a client do when it has UDP datagrams to send?',
    'It just sends the datagrams.');
add('What does a client application select for a TCP or UDP source port number?',
    'a random value in the range of the registered ports');
add('How many bits are in an IPv4 address?',
    '32');
add('Which two parts are components of an IPv4 address? (Choose two.)',
    'network portion',
    'host portion');
add('What does the IP address 172.17.4.250/24 represent?',
    'host address');
add('What is the purpose of the subnet mask in conjunction with an IP address?',
    'to determine the subnet to which the host belongs');
add('What subnet mask is represented by the slash notation /20?',
    '255.255.240.0');
add('A message is sent to all hosts on a remote network. Which type of message is it?',
    'directed broadcast');
add('What are three characteristics of multicast transmission? (Choose three.)',
    'A single packet can be sent to a group of hosts.',
    'Multicast transmission can be used by routers to exchange routing information.',
    'The range of 224.0.0.0 to 224.0.0.255 is reserved to reach multicast groups on a local network.');
add('Which three IP addresses are private ? (Choose three.)',
    '10.1.1.1','172.16.4.4','192.168.5.5');
add('Which two IPv4 to IPv6 transition techniques manage the interconnection of IPv6 domains? (Choose two.)',
    'dual stack','tunneling');
add('Which of these addresses is the shortest abbreviation for the IP address: 3FFE : 1044 : 0000 : 0000 : 00AB : 0000 : 0000 : 0057?',
    '3FFE : 1044 : 0 : 0 : AB :: 57');
add('What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?',
    'link-local');
add('What are two types of IPv6 unicast addresses? (Choose two.)',
    'loopback','link-local');
add('What are three parts of an IPv6 global unicast address? (Choose three.)',
    'a subnet ID that is used to identify networks inside of the local enterprise site','an interface ID that is used to identify the local host on the network');
add('An administrator wants to configure hosts to automatically assign IPv6 addresses to themselves by the use of Router Advertisement messages, but also to obtain the DNS server address from a DHCPv6 server. Which address assignment method should be configured?',
    'stateless DHCPv6');
add('Which protocol supports Stateless Address Autoconfiguration (SLAAC) for dynamic assignment of IPv6 addresses to a host?',
    'ICMPv6');
add('Which two things can be determined by using the ping command? (Choose two.)',
    'for the response to return to the source','the destination device is reachable through the network');
add('What is indicated by a successful ping to the ::1 IPv6 address?',
    'IP is properly installed on the host.');
add('A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?',
    'when the value in the TTL field reaches zero');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('The decimal equivalent of the binary number 10010101 is',
    '149');
add('he binary equivalent of the decimal number 232 is ',
    '11101000');
add('What is the decimal equivalent of the hex number 0x3F?',
    '63');

/*TEST 8*/
add('The decimal equivalent of the binary number 10010101 is',
    '149');
add('What is indicated by a successful ping to the ::1 IPv6 address?',
    'IP is properly installed on the host.');
add('Which message is displayed on the web server?',
    'Correct configuration!');
add('Which two ICMP messages are used by both IPv4 and IPv6 protocols? (Choose two.)​',
    'protocol unreachable','route redirection');
add('A message is sent to all hosts on a remote network. Which type of message is it?',
    'directed broadcast');
add('Which two things can be determined by using the ping command? (Choose two.)',
    'the average time it takes a packet to reach the destination and for the response to return to the source',
    'whether or not the destination device is reachable through the network');
add('A DHCP server is used to assign IP addresses dynamically to the hosts on a network. The address pool is configured with 192.168.10.0/24. There are 3 printers on this network that need to use reserved static IP addresses from the pool. How many IP addresses in the pool are left to be assigned to other hosts?',
    '251');
add('Which two parts are components of an IPv4 address? (Choose two.)',
    'network portion','host portion');
add('Which IPv6 address is most compressed for the full FE80:0:0:0:2AA:FF:FE9A:4CA3 address?​',
    'FE80::2AA:FF:FE9A:4CA3');
add('What are three parts of an IPv6 global unicast address? (Choose three.)',
    'an interface ID that is used to identify the local host on the network','a subnet ID that is used to identify networks inside of the local enterprise site','a global routing prefix that is used to identify the network portion of the address that has been provided by an ISP');
add('Which network migration technique encapsulates IPv6 packets inside IPv4 packets to carry them over IPv4 network infrastructures?',
    'tunneling');
add('When an IPv6 enabled host needs to discover the MAC address of an intended IPv6 destination, which destination address is used by the source host in the NS message?',
    'solicited-node multicast address');
add('When a Cisco router is being moved from an IPv4 network to a complete IPv6 environment, which series of commands would correctly enable IPv6 forwarding and interface addressing?',
    'Router# configure terminal','Router(config)# interface fastethernet 0/0','Router(config-if)# ipv6 address 2001:db8:bced:1::9/64','Router(config-if)# no shutdown','Router(config-if)# exit','Router(config)# ipv6 unicast-routing **');
add('What two statements describe characteristics of Layer 3 broadcasts? (Choose two.)',
    'Routers create broadcast domains.','A limited broadcast packet has a destination IP address of 255.255.255.255.');
add('Which two statements are correct about IPv4 and IPv6 addresses? (Choose two.)',
    'IPv6 addresses are represented by hexadecimal numbers.','IPv4 addresses are 32 bits in length.');
add('What is the prefix length notation for the subnet mask 255.255.255.224?',
    '/27');
add('What is the decimal equivalent of the hex number 0x3F?',
    '63');
add('What are two types of IPv6 unicast addresses? (Choose two.)',
    'link-local','loopback');
add('When will a router drop a traceroute packet?',
    'when the value in the TTL field reaches zero');
add('An IPv6 enabled device sends a data packet with the destination address of FF02::1. What is the target of this packet?',
    'all IPv6 enabled nodes on the local link');
add('How many bits are in an IPv4 address?',
    '32');
add('What is a result of connecting two or more switches together?',
    'The size of the broadcast domain is increased.');
add('How many broadcast domains are there?',
    '4');
add('What are two reasons a network administrator might want to create subnets? (Choose two.)',
    'improves network performance','easier to implement security policies');
add('A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?',
    '255.255.255.128');
add('The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?',
    'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('If a network device has a mask of /28, how many IP addresses are available for hosts on this network?',
    '14');
add('Which subnet mask would be used if 5 host bits are available?',
    '255.255.255.224');
add('How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?',
    '1022');
add('How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?',
    'three');
add('The network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetworks?',
    '255.255.255.224');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27','192.168.1.96/28');
add('A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many usable host addresses will this subnet provide?​',
    '6');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?',
    '72');
add('Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?',
    '10.16.10.64/27');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('A company is deploying an IPv6 addressing scheme for its network. The company design document indicates that the subnet portion of the IPv6 addresses is used for the new hierarchical network design, with the site subsection to represent multiple geographical sites of the company, the sub-site section to represent multiple campuses at each site, and the subnet section to indicate each network segment separated by routers. With such a scheme, what is the maximum number of subnets achieved per sub-site?',
    '16');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A');
add('The prefix-length for the range of addresses is',
    '/60');

/*TEST 9*/
add('How many usable host addresses are there in the subnet 192.168.1.32/27?',
    '30');
add('How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?',
    '1022');
add('A network administrator is variably subnetting a network. The smallest subnet has a mask of 255.255.255.248. How many host addresses will this subnet provide?',
    '6');
add('A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?',
    '255.255.255.128');
add('The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?',
    'IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33');
add('How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?',
    'three');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27','192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
    '/25');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many addresses are wasted in total by subnetting each network with a subnet mask of 255.255.255.224?',
    '72');
add('When developing an IP addressing scheme for an enterprise network, which devices are recommended to be grouped into their own subnet or logical addressing group?',
    'hosts accessible from the Internet');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('A computer that is configured with the IPv6 address as shown in the exhibit is unable to access the internet. What is the problem?',
    'The gateway address is in the wrong subnet.');
add('When subnetting a /64 IPv6 network prefix, which is the preferred new prefix?',
    '/72');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A::0');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
    '/64','/68');
add('In dotted decimal notation, the IP address      “172.25.0.126”     is the last host address for the network 172.25.0.64/26.',
    '172.25.0.126');
add('In dotted decimal notation, the subnet mask      “255.255.254.0”     will accommodate 500 hosts per subnet.',
    '255.255.254.0');
add('The prefix for the range of addresses is “60” . All the addresses have the part 2001:0DB8:BC15:00A in common. Each number or letter in the address represents 4 bits, so the prefix is /60.',
    '60');
add('A nibble consists of    “4”    bits. A nibble is half of a byte or 4 bits. This is significant because subnetting in IPv6 is usually done on a nibble boundary.',
    '4');
add('What issue is causing Host A to be unable to communicate with Host B?',
    'Host A and host B are on overlapping subnets.');
add('Given the network address of 192.168.5.0 and a subnet mask of 255.255.255.224, how many total host addresses are unused in the assigned subnets?',
    '72');
add('Which two characteristics are associated with UDP sessions? (Choose two.)',
    'Destination devices receive traffic with minimal delay.','Received data is unacknowledged.');
add('What happens if part of an FTP message is not delivered to the destination?',
    'The part of the FTP message that was lost is re-sent.');
add('A host device needs to send a large video file across the network while providing data communication to other users. Which feature will allow different communication streams to occur at the same time, without having a single data stream using all available bandwidth?',
    'multiplexing');
add('What kind of port must be requested from IANA in order to be used with a specific application?',
    'registered port');
add('What type of information is included in the transport header?',
    'destination and source port numbers');
add('What is a socket?',
    'the combination of a source IP address and port number or a destination IP address and port number');
add('What is the complete range of TCP and UDP well-known ports?',
    '0 to 1023');
add('Which flag in the TCP header is used in response to a received FIN in order to terminate connectivity between two network devices?',
    'ACK');
add('What is a characteristic of a TCP server process?',
    'There can be many ports open simultaneously on a server, one for each active server application.');
add('Which two flags in the TCP header are used in a TCP three-way handshake to establish connectivity between two network devices? (Choose two.)',
    'ACK','SYN');
add('A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?',
    '10 segments');
add('Which factor determines TCP window size?',
    'the amount of data the destination can process at one time');
add('During a TCP session, a destination device sends an acknowledgment number to the source device. What does the acknowledgment number represent?',
    'the next byte that the destination expects to receive');
add('What information is used by TCP to reassemble and reorder received segments?',
    'sequence numbers');
add('What does TCP do if the sending source detects network congestion on the path to the destination?',
    'The source will decrease the amount of data that it sends before it must receive acknowledgements from the destination.');
add('What is a characteristic of UDP?',
    'UDP reassembles the received datagrams in the order they were received.');
add('What does a client do when it has UDP datagrams to send?',
    'It just sends the datagrams.');
add('What happens if the first packet of a TFTP transfer is lost?',
    'The TFTP application will retry the request if a reply is not received.');
add('A host device is receiving live streaming video. How does the device account for video data that is lost during transmission?',
    'The device will continue receiving the streaming video, but there may be a momentary disruption.');
add('Why does HTTP use TCP as the transport layer protocol?',
    'because HTTP requires reliable delivery');
add('When is UDP preferred to TCP?',
    'when an application can tolerate some loss of data during transmission');
add('Which three application layer protocols use TCP? (Choose three.)',
    'SMTP','FTP','HTTP');

/*TEST 10*/
add('Which three layers of the OSI model provide similar network services to those provided by the application layer of the TCP/IP model? (Choose three.)',
    'session layer','application layer','presentation layer');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
    'compression','encryption');
add('Select three protocols that operate at the Application Layer of the OSI model. (Choose three.)',
    'FTP','POP3','DHCP');
add('A manufacturing company subscribes to certain hosted services from their ISP. The services required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)',
    'FTP','HTTP','SMTP');
add('What are two characteristics of peer-to-peer networks? (Choose two.)',
    'decentralized resources','resource sharing without a dedicated server');
add('What is an example of network communication that uses the client-server model?',
    'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('What is an advantage for small organizations of adopting IMAP instead of POP?',
    'Messages are kept in the mail servers until the client manually deletes them.');
add('Which two actions are taken by SMTP if the destination email server is busy when email messages are sent? (Choose two.)',
    'SMTP tries to send the messages at a later time.','SMTP periodically checks the queue for messages and attempts to send them again.');
add('Which application layer protocol uses message types such as GET, PUT, and POST?',
    'HTTP');
add('A DHCP-enabled client PC has just booted. During which two steps will the client PC use broadcast messages when communicating with a DHCP server? (Choose two.)',
    'DHCPDISCOVER','DHCPREQUEST');
add('A user accessed the game site www.nogamename.com last week. The night before the user accesses the game site again, the site administrator changes the site IP address. What will be the consequence of that action for the user?',
    'The user will access the site without problems.');
add('Which DNS server in the DNS hierarchy would be considered authoritative for the domain name records of a company named netacad?',
    'netacad.com');
add('Which three statements describe a DHCP Discover message? (Choose three.)',
    'The destination IP address is 255.255.255.255.','The message comes from a client seeking an IP address.','All hosts receive the message, but only a DHCP server replies.');
add('Which phrase describes an FTP daemon?',
    'a program that is running on an FTP server');
add('What is true about the Server Message Block protocol?',
    'Clients establish a long term connection to servers.');
add('When would it be more efficient to use SMB to transfer files instead of FTP?',
    'when downloading large numbers of files from the same server');
add('What is the acronym for the protocol that is used when securely communicating with a web server?',
    'HTTPS');
add('What command was used to resolve  a given host name by querying the name servers?',
    'nslookup');
add('Which PC or PCs are sending FTP packets to the server?',
    'PC_2');
add('Which two definitions accurately describe the associated application layer protocol? (Choose two.)',
    'Telnet – provides remote access to servers and networking devices','DNS – resolves Internet names to IP addresses');
add('The application layer of the TCP/IP model performs the functions of what three layers of the OSI model? (Choose three.)',
    'session','presentation','application');
add('Which layer in the TCP/IP model is used for formatting, compressing, and encrypting data?',
    'application');
add('What are two characteristics of the application layer of the TCP/IP model? (Choose two.)',
    'the creation and maintenance of dialogue between source and destination applications','closest to the end user');
add('A manufacturing company subscribes to certain hosted services from its ISP. The services that are required include hosted world wide web, file transfer, and e-mail. Which protocols represent these three key applications? (Choose three.)',
    'FTP','HTTP','SMTP');
add('What is an example of network communication that uses the client-server model?',
    'A workstation initiates a DNS request when the user types www.cisco.com in the address bar of a web browser.');
add('Two students are working on a network design project. One student is doing the drawing, while the other student is writing the proposal. The drawing is finished and the student wants to share the folder that contains the drawing so that the other student can access the file and copy it to a USB drive. Which networking model is being used?',
    'peer-to-peer');
add('What do the client/server and peer-to-peer network models have in common?',
    'Both models support devices in server and client roles');
add('What is an advantage for small organizations of adopting IMAP instead of POP?',
    'Messages are kept in the mail servers until they are manually deleted from the email client.');
add('Which application layer protocol uses message types such as GET, PUT, and POST?',
    'HTTP');
add('When retrieving email messages, which protocol allows for easy, centralized storage and backup of emails that would be desirable for a small- to medium-sized business?',
    'IMAP');
add('Which three statements describe a DHCP Discover message? (Choose three.)',
    'The destination IP address is 255.255.255.255.','The message comes from a client seeking an IP address.','All hosts receive the message, but only a DHCP server replies');
add('What part of the URL, http://www.cisco.com/index.html, represents the top-level DNS domain?',
    '.com');
add('Which two tasks can be performed by a local DNS server? (Choose two.)',
    'mapping name-to-IP addresses for internal hosts','forwarding name resolution requests between servers');
add('Which phrase describes an FTP daemon?',
    'a program that is running on an FTP server');
add('Which statement is true about FTP?',
    'The client can download data from or upload data to the server.');
add('What is true about the Server Message Block protocol?',
    'Clients establish a long term connection to servers.');
add('Which application layer protocol is used to provide file-sharing and print services to Microsoft applications?',
    'SMB');
add('What is the acronym for the protocol that is used when securely communicating with a web server?',
    'HTTPS');
add('The HTTP message type used by the client to request data from the web server is the  message',
    'GET');
add('What command was used to resolve a given host name by querying the name servers?)',
    'NSLOOKUP');


/*TEST 11*/

add('Which two statements about a service set identifier (SSID) are true? (Choose two.)',
    'all wireless devices on the same WLAN must have the same SSID','tells a wireless device to which WLAN it belongs');
add('Which type of network attack involves the disabling or corruption of networks, systems, or services?',
    'denial of service attacks');
add('Which command will backup the configuration that is stored in NVRAM to a TFTP server?',
    'copy startup-config tftp');
add('How long will a user be blocked if the user exceeds the maximum allowed number of unsuccessful login attempts?',
    '3 minutes');
add('The command that is issued on a router is used to verify the value of the software configuration register.',
    'show version');
add('What is a security feature of using NAT on a network?',
    'allows internal IP addresses to be concealed from external users');
add('A network administrator has determined that various computers on the network are infected with a worm. Which sequence of steps should be followed to mitigate the worm attack?',
    'containment, inoculation, quarantine, and treatment');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
    'WPA');
add('Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?',
    'Something is causing a time delay between the networks.');
add('When should an administrator establish a network baseline?',
    'at regular intervals over a period of time');
add('A ping fails when performed from router R1 to directly connected router R2. The network administrator then proceeds to issue the show cdp neighbors command. Why would the network administrator issue this command if the ping failed between the two routers?',
    'The network administrator wants to verify Layer 2 connectivity.');
add('Which statement is true about CDP on a Cisco device?',
    'CDP can be disabled globally or on a specific interface.');
add('What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?',
    'to list the content of the NVRAM');
add('A network administrator checks the security log and notices there was unauthorized access to an internal file server over the weekend. Upon further investigation of the file system log, the administrator notices several important documents were copied to a host located outside of the company. What kind of threat is represented in this scenario?',
    'information theft');
add('If a configuration file is saved to a USB flash drive attached to a router, what must be done by the network administrator before the file can be used on the router?',
    'Edit the configuration file with a text editor.');
add('Which network design consideration would be more important to a large corporation than to a small business?',
    'redundancy');
add('Which protocol supports rapid delivery of streaming media?',
    'RTP');
add('An administrator is trying to troubleshoot connectivity between PC1 and PC2 and uses the tracert command from PC1 to do it. Based on the displayed output, where should the administrator begin troubleshooting?',
    'R1');
add('Which two statements characterize wireless network security? (Choose two.)',
    'Using the default IP address on an access point makes hacking easier.','With SSID broadcast disabled, an attacker must know the SSID to connect.');
add('Which two actions can be taken to prevent a successful attack on an email server account? (Choose two.)',
    'Never send the password through the network in a clear text.','Limit the number of unsuccessful attempts to log in to the server.');
add('How should traffic flow be captured in order to best understand traffic patterns in a network?',
    'during peak utilization times');
add('What do WLANs that conform to IEEE 802.11 standards allow wireless user to do?',
    'connect wireless hosts to hosts or services on a wired Ethernet network');
add('defines the protocols and technologies that implement the transmission of voice data over an IP network.',
    'VoIP');
add('The show command provides information about the amount of available and free flash memory and its permissions for reading or writing data.',
    'file systems');
add('A newly hired network technician is given the task of ordering new hardware for a small business with a large growth forecast. Which primary factor should the technician be concerned with when choosing the new devices?',
    'devices with support for modularity');
add('Which network design consideration would be more important to a large corporation than to a small business?',
    'redundancy');
add('Which two traffic types require delay sensitive delivery? (Choose two.)',
    'voice','video');
add('A network administrator for a small company is contemplating how to scale the network over the next three years to accommodate projected growth. Which three types of information should be used to plan for network growth? (Choose three.)',
    'documentation of the current physical and logical topologies','analysis of the network traffic based on protocols, applications, and services used on the network','inventory of the devices that are currently used on the network');
add('Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)',
    'Capture traffic during peak utilization times to get a good representation of the different traffic types.','Perform the capture on different network segments.');
add('Some routers and switches in a wiring closet malfunctioned after an air conditioning unit failed. What type of threat does this situation describe?',
    'environmental');
add('Which type of network threat is intended to prevent authorized users from accessing resources?',
    'DoS attacks');
add('Which two actions can be taken to prevent a successful network attack on an email server account? (Choose two.)',
    'Never send the password through the network in a clear text.','Limit the number of unsuccessful attempts to log in to the server.');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses initiated from internal hosts?',
    'stateful packet inspection');
add('What is the purpose of the network security authentication function?',
    'to require users to prove who they are');
add('A network administrator is issuing the login block-for 180 attempts 2 within 30 command on a router. Which threat is the network administrator trying to prevent?',
    'a user who is trying to guess a password to access the router');
add('What is the purpose of using SSH to connect to a router?',
    'It allows a secure remote connection to the router command line interface.');
add('Which two steps are required before SSH can be enabled on a Cisco router? (Choose two.)',
    'Give the router a host name and domain name.','Generate a set of secret keys to be used for encryption and decryption.');
add('What is the purpose of issuing the commands cd nvram: then dir at the privilege exec mode of a router?',
    'to list the content of the NVRAM');
add('Which command will backup the configuration that is stored in NVRAM to a TFTP server?',
    'copy startup-config tftp');
add('Baseline documentation for a small company had ping round trip time statistics of 36/97/132 between hosts H1 and H3. Today the network administrator checked connectivity by pinging between hosts H1 and H3 that resulted in a round trip time of 1458/2390/6066. What does this indicate to the network administrator?',
    'Something is causing a time delay between the networks.');
add('When should an administrator establish a network baseline?',
    'at regular intervals over a period of time');
add('Which statement is true about CDP on a Cisco device?​',
    'CDP can be disabled globally or on a specific interface​.');
add('A network administrator for a small campus network has issued the show ip interface brief command on a switch. What is the administrator verifying with this command?',
    'the status of the switch interfaces and the address configured on interface vlan 1');
add('A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?',
    'The ARP cache is cleared.');
add('defines the protocols and technologies that implement the transmission of voice data over an IP network',
    'VoIP');
add('The show command provides information about the amount of free nvram and flash memory with the permissions for reading or writing data.',
    'file systems');
add('The command that is issued on a router is used to verify the value of the software configuration register.​',
    'show version');



/*Prompts for matching questions and Packet Tracer Labs*/
add = prompts.add;

//add('helper label');

add('step 5 => R1 replaces the address 192.168.10.10 with a translated inside global address.');
add('step 2 => R1 checks the NAT configuration to determine if this packet should be translated.');
add('step 4 => R1 selects an available global address from the dynamic address pool.');
add('step 1 => The cost sends packets that request a connection to the server at the address 209.165.200.254');
add('step 3 => If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.');

add('full operating system > flash');
add('limited operating system > ROM');
add('routing table > RAM');
add('startup configuration file > NVRAM');

add('Each router is responsible for “saying hello” to its neighbors on directly connected networks. > step 2');
add('Each router builds a Link-State Packet (LSP) containing the state of each directly connected link > step 3');
add('Each router learns about its own directly connected networks. > step 1');
add('Each router floods the LSP to all neighbors, who then store all LSPs received in a database > step 4');
add('Each router uses the database to construct a complete map of the topology and computes the best > step 5');

add('buffering > 1');
add('full-duplex > 2');
add('collision domain > 3');
add('MAC address table > 4');

// 2016
// CCNA v5.1 + v5.0

/*TEST 4*/
add('Step 1 => The physical layer encodes the frames');
add('Step 2 => The physical layer creates the signals that represent the bits in each frame');
add('Step 3 => The signals are sent on the media one at a time.');
add('Step 4 => The physical layer retrieves the individual signals from the media');
add('Step 5 => The physical layer restores the individual signals to their bit representations');

add('Multimode Fiber => LED as light source');
add('Multimode Fiber => several paths of light into the fiber');
add('Multimode Fiber => generally used with LANs');
add('Single-mode Fiber => only one ray of light into the fiber');
add('Single-mode Fiber => generally used for campus backbone');
add('Single-mode Fiber => laser as light source');

/*TEST 5*/
add('cut-through => has low latency');
add('cut-through => may forward runt frames');
add('cut-through => begins forwarding when the destination address is received');
add('store-and-forward => always stores the entire frame');
add('store-and-forward => checks the CRC before forwarding');
add('store-and-forward => checks the frame length before forwarding');

add('Beginning of frame - Field 1 => Preamble');
add('Field 2 => Start Frame Delimiter');
add('Field 3 => Destination MAC Address');
add('Field 4 => Source MAC Address');
add('Field 5 => Length/Type');
add('Field 6 => Encapsulated Data');
add('End of frame - Field 7 => Frame Check Sequence');

/*TEST 6*/
add('enable -> R1>');
add('copy running-config startup-config -> R1#');
add('login -> R1(config-line)#');
add('interface fastethernet 0/0 -> R1(config)#');

add('FastEthernet0/0 -> packets with destination of 172.17.6.15');
add('FastEthernet0/1 -> packets with destination of 172.17.14.8');
add('FastEthernet1/0 -> packets with destination of 172.17.12.10');
add('FastEthernet1/1 -> packets with destination of 172.17.10.5');
add('Serial0/0/0 -> packets with destination of 172.17.8.20');

add('IP v4 Header (A) -> Flags (A)');
add('IP v4 Header (B) -> Total Length (B)');
add('IP v6 Header (C) ->Traffic Class (C)');
add('IP v6 Header (D) -> Flow Label (D)');

add('R1(config)# -> service password-encrytion');
add('R1> -> enable');
add('R1# -> copy running-config startup-config');
add('R1(config-line)# -> login');
add('R1(config-if)# -> ip address 192.168.4.4 255.255.255.0');

/*TEST 7*/
add('192.168.1.2 -> source IP address');
add('192.168.2.2 -> destination IP address');
add('2578 -> source port number');
add('80 -> destination port number');

add('TCP  ->  window size');
add('TCP  -> 3-way handshake');
add('UDP -> connectionless');
add('UDP -> best for VoIP');
add('Both UDP and TCP -> checksum');
add('Both UDP and TCP -> port number');

add('TCP  -> HTTP');
add('TCP  -> FTP ');
add('TCP  -> TELNET');
add('UDP  -> TFTP');
add('UDP  -> DHCP ');

add('169.254.1.5 -> a link-local address');
add('192.0.2.123 -> a TEST-NET address');
add('240.2.6.255 -> an experimental address');
add('172.19.20.5 -> a private address');
add('127.0.0.1 -> a loopback address');

/*TEST 8*/
add('Host address [A] 192.168.100.161/25 [A]');
add('Host address [B] 203.0.113.100/24 [B]');
add('Host address [C] 10.0.50.10/30 [C]');
add('Network address [D] 192.168.1.80/29 [D]');
add('Network address [E] 172.110.12.64/28 [E]');
add('Network address [F] 10.10.10.128/25 [F]');
add('Broadcast address [G] 10.0.0.159/27 [G]');
add('Broadcast address [H] 192.168.1.191/26 [H]');

add('169.254.1.5 -> a link-local address');
add('192.0.2.153 -> a TEST-NET address');
add('240.2.6.255 -> an experimental address');
add('172.19.20.5 -> a private address');
add('127.0.0.1 -> a loopback address');

add('192.31.18.123 -> a legacy class C address');
add('198.256.2.6 -> an invalid IPv4 address');
add('64.100.3.5 -> a legacy class A address');
add('224.2.6.255 -> a legacy class D address');
add('128.107.5.1 -> a legacy class B address');

add('192.168.1.68 -> 192.168.1.64/27');
add('192.168.1.48 -> 192.168.1.32/27');
add('192.168.1.121 -> 192.168.1.96/27');

add('192.168.0.192 /27   -> Network C');
add('192.168.0.0 /25       -> Network A');
add('192.168.0.224 /30  -> Network D');
add('192.168.0.128 /26   -> Network B');

/*TEST 9*/
add('{no picture9}');
add('– not scored –');
add('192.168.1.64/27');
add('– not scored –');
add('192.168.1.32/27');
add('192.168.1.96/27');

add('{with picture9}');
add('– not scored –');
add('Network C');
add('– not scored –');
add('Network A');
add('Network D');
add('Network B');

add('destination IP address -> 192.168.2.2');
add('destination port number -> 80');
add('source IP address -> 192.168.1.2 ');
add('source port number -> 2578');

/*TEST 10*/

add('end device address > A');
add('– not scored – > E');
add('authoritative name server > NS');
add('canonical name > CNAME');
add('mail exchange record > MX');

add('a message that is used to identify the explicit server and lease offer to accept');
add('a message that is used to locate any available DHCP server on a network');
add('– not scored –');
add('a message that is used to suggest a lease to a client');
add('a message that is used to acknowledge that the lease is successful');

add('no dedicated server is required > network');
add('client and server roles are set on a per request basis > network');
add('requires a specific user interface > application');
add('a background service is required > application');

add('no dedicated server is required > peer-to-peer network');
add('client and server roles are set on a per request basis > peer-to-peer network');
add('requires a specific user interface > peer-to-peer aplication');
add('a background service is required > peer-to-peer aplication');

add('DHCP -> dynamically assigns IP address to clients');
add('DNS -> maps URLs to numerical addresses');
add('IMAP -> allows viewing of messages on email clients');
add('HTTP -> displays web pages');
add('SMTP -> sends email messages');

/*TEST 11*/
add('installing virus code to destroy surveillance recordings for certain days -> data loss');
add('information to apply for a credit card -> identity theft');
add('preventing userd from accessing a website by sending a large number of link requests in a short period -> disruption of service');
add('obtaining trade secret documents illegally -> information theft');

/* Final Test*/
add('Which communication tool allows real-time collaboration?',
    'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
    'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
    'WAN');
add('Refer to the exhibit. From which location did this router load the IOS? ',
    'flash memory');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
    'an SSH connection');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
    'The administrator must first enter privileged EXEC mode before issuing the command.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
    'to interrupt the ping process');
add('What function does pressing the Tab key have when entering a command in IOS?',
    'It completes the remainder of a partially typed word in a command.');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
    'Switch(config)#?');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
    'linevtyin');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. Which action will be successful?',
    'PC2 can send a ping to 192.168.1.1.');
add('Which IPv4 address can be pinged to test the internal TCP/IP operation of a host?',
    '127.0.0.1');
add('What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)',
    'DHCP','DNS','FTP');
add('Which two protocols function at the internet layer? (Choose two.)',
    'ICMP','IP');
add('Which publicly available resources describe protocols, processes, and technologies for the Internet but do not give implementation details?',
    'Request for Comments');
add('Which address on a PC does not change, even if the PC is moved to a different network?',
    'MAC address');
add('What is the protocol that is used to discover a physical address from a known logical address and what message type does it use?',
    'ARP, broadcast');
add('What will happen if the default gateway address is incorrectly configured on a host?',
    'The host cannot communicate with hosts in other networks.');
add('What is an important function of the physical layer of the OSI model?',
    'It encodes frames into electrical, optical, or radio wave signals.');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
    'twisting opposing circuit wire pairs together');
add('Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)',
    'Fiber-optic cabling does not conduct electricity.','Fiber-optic cabling is primarily used as backbone cabling.');
add('What is contained in the trailer of a data-link frame?',
    'error detection');
add('What is the auto-MDIX feature on a switch?',
    'crossover Ethernet cable connection');
add('Refer to the exhibit. A ping to PC3 is issued from PC0, PC1, and PC2 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
    'just PC0 and PC1 MAC addresses');
add('How does a Layer 3 switch differ from a Layer 2 switch?',
    'An IP address can be assigned to a physical port of a Layer 3 switch. However, this is not supported in Layer 2 switches.');
add('What is the purpose of the routing process?',
    'to select the paths that are used to direct traffic to destination networks');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
    'NAT');
add('Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?',
    'It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.');
add('Which of the following are primary functions of a router? (Choose two.)',
    'packet switching','path selection');
add('Which two statements correctly describe a router memory type and its contents? (Choose two.)',
    'RAM is volatile and stores the running configuration.','ROM is nonvolatile and stores bootup information.');
add('In which default order will a router search for startup configuration information?',
    'NVRAM, TFTP, setup mode');
add('What happens when part of an Internet VoIP transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which three IP addresses are private ? (Choose three.)',
    '10.172.168.1','172.20.4.4','192.168.5.254');
add('How many bits make up the single IPv6 hextet :10CD:?',
    '16');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
    'to enable the router as an IPv6 router');
add('Which group of IPv6 addresses cannot be allocated as a host source address?',
    'FF00::/8');
add('What is the purpose of ICMP messages?',
    'to provide feedback of IP packet transmissions');
add('Refer to the exhibit. A technician has configured a user workstation with the IP address and default subnet masks that are shown. Although the user can access all local LAN resources, the user cannot access any Internet sites by using either FQDN or IP addresses. Based upon the exhibit, what could account for this failure?',
    'The default gateway address in incorrect.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
    '192.168.1.64/26');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Refer to the exhibit. Which IP addressing scheme should be changed?',
    'Site 2');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
    '/64','/68');
add(' A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? (Choose two.)',
    'DHCPDISCOVER','DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
    'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
    'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('Refer to the exhibit. The network administrator enters these commands into the R1 router:R1# copy running-config tftp Address or name of remote host [ ]? When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
    '192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? (Choose two.)',
    'broadcast SSID','default administrator password');
add(' Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('Fill in the blank. is a best-effort, connectionless application layer protocol that is used to transfer files.',
    'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? (Choose two.)',
    'wireless NIC','wireless client software');
add('Consider the following range of addresses: 2001:0DB8:BC15:00A0:0000:: 2001:0DB8:BC15:00A1:0000::2001:0DB8:BC15:00A2:0000::2001:0DB8:BC15:00AF:0000::The prefix-length for the range of addresses is.',
    '/60');
add('A host is accessing an FTP server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('When is a dial-up connection used to connect to an ISP?',
    'when a regular telephone line is used');
add('On a school network, students are surfing the web, searching the library database, and attending an audio conference with their sister school in Japan. If network traffic is prioritized with QoS, how will the traffic be classified from highest priority to lowest priority?',
    'audio conference, database, HTTP');
add('During normal operation, from which location do most Cisco routers run the IOS?',
    'RAM');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
    'an SSH connection');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
    'Ctrl-Shift-6');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued??',
    'Switch(config)#?');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
    'VLAN 1');
add('A technician uses the ping 127.0.0.1 command. What is the technician testing?',
    'the TCP/IP stack on a network host');
add('Which device should be used for enabling a host to communicate with another host on a different network?',
    'router');
add('A network technician is measuring the transfer of bits across the company backbone for a mission critical application. The technician notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
    'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('Which characteristics describe fiber optic cable? (Choose two.)',
    'It is not affected by EMI or RFI.','It is the most expensive type of LAN cabling');
add('What are two features of a physical, star network topology? (Choose two.)',
    'It is straightforward to troubleshoot.','It is easy to add and remove end devices.');
add('A frame is transmitted from one networking device to another. Why does the receiving device check the FCS field in the frame?',
    'to check the frame for possible transmission errors');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
    'It forwards the frame out of all ports except for the port at which the frame was received.');
add('Which switching method has the lowest level of latency?',
    'fast-forward');
add('Which parameter does the router use to choose the path to the destination when there are multiple routes available?',
    'the lower metric value that is associated with the destination network');
add('Which two statements describe the functions or characteristics of ROM in a router? (Choose two.)',
    'maintains instructions for POST diagnostics','stores bootstrap program');
add('Which statement describes a characteristic of the Cisco router management ports?',
    'A console port is not used for packet forwarding.');
add('What happens when part of an Internet radio transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
    '203.0.113.211');
add(' Which three IP addresses are private ? (Choose three.)',
    '10.20.30.1','172.30.5.3','192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
    'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com??',
    '13');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27','192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
    '/25');
add('Which protocol supports rapid delivery of streaming media?',
    'Real-Time Transport Protocol');
add('Why would a network administrator use the tracert utility?',
    'to identify where a packet was lost or delayed on a network');
add('Refer to the exhibit. What is the significance of the asterisk (*) in the exhibited output?',
    'The asterisk designates which file system is the default file system.');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
    'WPA');
add('Fill in the blank. Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as .',
    'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
    'area C');
add('What is the purpose of having a converged network?',
    'to reduce the cost of deploying and maintaining the communication infrastructure');
add('hree office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
    'audio conference, financial transactions, web page');
add('During normal operation, from which location do most Cisco switches and routers run the IOS?',
    'RAM');
add('A network administrator is making changes to the configuration of a router. After making the changes and verifying the results, the administrator issues the copy running-config startup-config command. What will happen after this command executes?',
    'The configuration will load when the router is restarted.');
add('What information does the loopback test provide?',
    'The TCP/IP stack on the device is working correctly.');
add('What is a characteristic of the LLC sublayer?',
    'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?',
    'CSMA/CA');
add('What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?',
    'The switch drops the frame.');
add('Which destination address is used in an ARP request frame?',
    'FFFF.FFFF.FFFF');
add('What is the auto-MDIX feature on a switch?',
    'the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
    'store-and-forward switching');
add('What are the two main components of Cisco Express Forwarding (CEF)? (Choose two.)',
    'adjacency tables','forwarding information base (FIB)');
add('Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?',
    'It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward','the destination host.');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
    'NAT');
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks??',
    'The no shutdown command was not issued on these interfaces.');
add('What happens when part of an Internet television transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
    'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify the destination web browser?',
    'the destination port number');
add('Which statement is true regarding the UDP client process during a session with a server?',
    'Datagrams that arrive in a different order than that in which they were sent are not placed in order.');
add('Which two components are configured via software in order for a PC to participate in a network environment? (Choose two.)',
    'IP address','subnet mask');
add('What are three characteristics of multicast transmission? (Choose three.)',
    'A single packet can be sent to a group of hosts.','Multicast transmission can be used by routers to exchange routing information.','Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A::0');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
    'compression','encryption');
add('What is the purpose of the network security authentication function?',
    'to require users to prove who they are');
add('Which type of wireless security makes use of dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('Fill in the blank. During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a message.',
    'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank.The Server0 message is . ”     ”',
    'winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
    'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
    'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
    '2001:db8:abc:5::1');

/*Updated DIC .2, 2015*/

add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
    'audio conference, financial transactions, web page');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
    'secretin');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)',
    'data link layer addressing','detection of errors through CRC calculations','delimiting groups of bits into frames');
add('What must be configured to enable Cisco Express Forwarding (CEF) on most Cisco devices that perform Layer 3 switching?',
    'CEF is enabled by default, so no configuration is necessary.');
add('What is the purpose of adjacency tables as used in Cisco Express Forwarding (CEF)?',
    'to maintain Layer 2 next-hop addresses');
add('Which statement describes a characteristic of the network layer in the OSI model?',
    'Its protocols specify the packet structure and processing used to carry the data from one host to another.');
add('A user gets an IP address of 192.168.0.1 from the company network administrator. A friend of the user at a different company gets the same IP address on another PC. How can two PCs use the same IP address and still reach the Internet, send and receive email, and search the web?',
    'ISPs use Network Address Translation to change a user IP address into an address that can be used on the Internet.');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
    'link-local');
add('Why does HTTP use TCP as the transport layer protocol?',
    'because HTTP requires reliable delivery');
add('What is the binary representation of 0xCA?',
    '11001010');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
    '2001:DB8:0:AB00::1234');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?​',
    '13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
    'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
    'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
    'tracert 10.1.1.5');
add('Fill in the blank. To prevent faulty network devices from carrying dangerous voltage levels, equipment must be correctly',
    'grounded');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
    'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('What is a possible hazard that can be caused by network cables in a fire?',
    'The cable insulation could be flammable.');
add('What device is commonly used to verify a UTP cable?',
    'a cable tester');
add('What needs to be checked when testing a UTP network cable?',
    'wire map');
add('Refer to the exhibit. A ping to PC2 is issued from PC0, PC1, and PC3 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
    'just PC0 and PC1 MAC addresses');
add('Which function is provided by TCP?',
    'detection of missing packets');
add('What does a router use to determine where to send data it receives from the network?',
    'a routing table');
add('Which router interface should be used for direct remote access to the router via a modem?',
    'an AUX port');
add('A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?',
    'any line configuration mode');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
    'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('Refer to the exhibit. A TCP segment from a server has been captured by Wireshark, which is running on a host. What acknowledgement number will the host return for the TCP segment that has been received?',
    '306');
add('Which statement is true about an interface that is configured with the IPv6 address command?',
    'A link-local IPv6 address is automatically configured on the interface.');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
    'default gateway address');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
    '172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
    '10.1.1.128/28',' 10.1.1.144/28','10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
    '4');
add(' A  l    topology influences the type of network framing and media access control that will be used.',
    'logica');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration?​',
    'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
    'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? (Choose two.)',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? (Choose two.)',
    'fast-forward switching','fragment-free switching');
add(' A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? (Choose two.)',
    'A port is considered to be open when it has an active server application that is assigned to it.','Server security can be improved by closing ports that are associated with unused services.');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
    'to identify the network address of the destination network');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
    '236.17.12.10');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('Fill in the blank. Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
    'Modular');
add('Refer to the exhibit. What is the maximum TIL value that is used to reach the destination www.cisco.com?',
    '13');
add('Which statement is true about DHCP operation?',
    'When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the networK.');
add('Which type of wireless security is easily compromised?',
    'WEP');
add('A network administrator notices that the throughput on the network appears lower than expected when compared to the end-to-end network bandwidth. Which three factors can explain this difference? (Choose three.)',
    'the amount of traffic','the type of traffic','the number and type of network devices that the data is crossing');
add('A host PC is attempting to lease an address through DHCP. What message is sent by the server to the client know it is able to use the provided IP information?',
    'DHCPOFFER');
add('A network administrator is configuring access control to switch SW1. If the administrator uses console line to connect to the switch, which password is needed to access user EXEC mode?',
    'lineconin');
add('What is a characteristic of UTP cabling?',
    'cancellation');
add('How many bits would need to be borrowed if a network admin were given the IP addressing scheme of 172.16.0.0/16 and needed no more than 16 subnet with equal number of hosts?',
    '4');
add('It will give 4 options about ping, the correct one is:',
    'The PC2 will be able to ping 192.168.1.1');
add('Which statement best describes the operation of the File Transfer Protocol?',
    'An FTP server uses a source port number of 20 and a randomly generated destination port number during the establishment of control traffic with an FTP client.');
add('A client is establishing a TCP session with a server. How is the acknowledgment number in the response segment to the client determined?',
    'The acknowledgment number field is modified by adding 1 to the randomly chosen initial sequence number in response to the client.');
add('Why does layer 3 device perform the ANDing process on a destination IP and subnet Mask?',
    'to identify network address of destination host;');
add('There was also a question about if you activated service password encryption in the past and you prompt “no service password encryption” what password are modified ?',
    'no password at all;');
add('What type of communication rule would best describe CSMA/CD?',
    'access method');
add('What is the primary reason to subnet IPv6 prefixes?',
    'to create a hierarchical Layer 3 network design');
add('What type of IPv6 address is FE80::1?',
    'link-local');
add('Which statement describes data throughput?',
    'It is the measure of the bits transferred across the media over a given period of time.');
add('Fill in the blank. Use a number.IPv4 multicast addresses are directly mapped to IEEE 802 (Ethernet) MAC addresses using the last ______ of the 28 available bits in the IPv4 multicast group address.',
    '4');
add('How could a faulty network device create a source of hazard for a user? (Choose two.)',
    'It could stop functioning.','It could explode.');
add('What are three important considerations when planning the structure of an IP addressing scheme? (Choose three.)',
    'preventing duplication of addresses','providing and controlling access','conserving addresses');
add('What is the metric value that is used to reach the 10.1.1.0 network in the following routing table entry? D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0',
    '2170112');
add('Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? (Choose two)',
    'VoIP','DNS');
add('What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?',
    'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.');
add('To what legacy address class does the address 10.0.0.0 belong?',
    'Class A');
add('What type of communication medium is used with a wireless LAN connection?',
    'microwave');
add('Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?',
    'SLAAC');
add('What is a characteristic of DNS?',
    'DNS servers can cache recent queries to reduce DNS query traffic.');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A');
add('What are two services provided by the OSI network layer? (Choose two.)',
    'encapsulating PDUs from the transport layer','routing packets toward the destination');
add('What information is maintained in the CEF adjacency table?',
    'Layer 2 next hops NOT SURE NO ANSWER');
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)',
    'voice','video');

/*Final exam*/
add('Which communication tool allows real-time collaboration?',
    'instant messaging');
add('A host is accessing a Web server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
    'DSL');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?',
    'WAN');
add('Refer to the exhibit. From which location did this router load the IOS?',
    'flash memory');
add('Which connection provides a secure CLI session with encryption to a Cisco network device?',
    'an SSH connection');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
    'The administrator must first enter privileged EXEC mode before issuing the command.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?',
    'to interrupt the ping process');
add('What function does pressing the Tab key have when entering a command in IOS?',
    'It completes the remainder of a partially typed word in a command.');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
    'Switch(config)#?');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
    'linevtyin');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. Which action will be successful?',
    'PC2 can send a ping to 192.168.1.1.');
add('Which IPv4 address can be pinged to test the internal TCP/IP operation of a host?',
    '127.0.0.1');
add('What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)',
    'DHCP','DNS','FTP');
add('Which two protocols function at the internet layer? (Choose two.)',
    'ICMP','IP');
add('Which publicly available resources describe protocols, processes, and technologies for the Internet but do not give implementation details?',
    'Request for Comments');
add('Which address on a PC does not change, even if the PC is moved to a different network?',
    'MAC address');
add('What is the protocol that is used to discover a physical address from a known logical address and what message type does it use?',
    'ARP, broadcast');
add('What will happen if the default gateway address is incorrectly configured on a host?',
    'The host cannot communicate with hosts in other networks.');
add('What is an important function of the physical layer of the OSI model?',
    'It encodes frames into electrical, optical, or radio wave signals.');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?',
    'twisting opposing circuit wire pairs together');
add('Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)',
    'Fiber-optic cabling does not conduct electricity.','Fiber-optic cabling is primarily used as backbone cabling.');
add('What is contained in the trailer of a data-link frame?',
    'error detection');
add('What is the auto-MDIX feature on a switch',
    'crossover Ethernet cable connection');
add('Refer to the exhibit. A ping to PC3 is issued from PC0, PC1, and PC2 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
    'just PC0 and PC1 MAC addresses');
add('How does a Layer 3 switch differ from a Layer 2 switch?',
    'An IP address can be assigned to a physical port of a Layer 3 switch. However, this is not supported in Layer 2 switches.');
add('What is the purpose of the routing process?',
    'to select the paths that are used to direct traffic to destination networks');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
    'NAT');
add('Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?',
    'It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.');
add('Which of the following are primary functions of a router? (Choose two.)',
    'packet switching','path selection');
add('Which two statements correctly describe a router memory type and its contents? (Choose two.)',
    'RAM is volatile and stores the running configuration.','ROM is nonvolatile and stores bootup information.');
add('In which default order will a router search for startup configuration information?',
    'NVRAM, TFTP, setup mode');
add('What happens when part of an Internet VoIP transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which three IP addresses are private ? (Choose three.)',
    '10.172.168.1','172.20.4.4','192.168.5.254');
add('How many bits make up the single IPv6 hextet :10CD:?',
    '16');
add('What is the effect of configuring the ipv6 unicast-routing command on a router?',
    'to enable the router as an IPv6 router');
add('Which group of IPv6 addresses cannot be allocated as a host source address?',
    'FF00::/8');
add('What is the purpose of ICMP messages?',
    'to provide feedback of IP packet transmissions');
add('Refer to the exhibit. A technician has configured a user workstation with the IP address and default subnet masks that are shown. Although the user can access all local LAN resources, the user cannot access any Internet sites by using either FQDN or IP addresses. Based upon the exhibit, what could account for this failure?',
    'The default gateway address in incorrect.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?',
    '192.168.1.64/26');
add('A network administrator needs to monitor network traffic to and from servers in a data center. Which features of an IP addressing scheme should be applied to these devices?',
    'predictable static IP addresses for easier identification');
add('Refer to the exhibit. Which IP addressing scheme should be changed?',
    'Site 2');
add('Which two notations are useable nibble boundaries when subnetting in IPv6? (Choose two.)',
    '/64','/68');
add('A host PC has just booted and is attempting to lease an address through DHCP. Which two messages will the client typically broadcast on the network? (Choose two.)',
    'DHCPDISCOVER','DHCPREQUEST');
add('What is the purpose of the network security accounting function?',
    'to keep track of the actions of a user');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?',
    'login block-for 60 attempts 5 within 60');
add('A particular website does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('When the router prompts for an address or remote host name, what IP address should the administrator enter at the prompt?',
    '192.168.11.252');
add('What two preconfigured settings that affect security are found on most new wireless routers? (Choose two.)',
    'broadcast SSID','default administrator password');
add('Which type of wireless security generates dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('is a best-effort, connectionless application layer protocol that is used to transfer files.',
    'TFTP');
add('Which two components are necessary for a wireless client to be installed on a WLAN? (Choose two.)',
    'wireless NIC','wireless client software');
add('The prefix-length for the range of addresses is',
    '/60 ');
add('A host is accessing an FTP server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('When is a dial-up connection used to connect to an ISP?',
    'when a regular telephone line is used');
add('On a school network, students are surfing the web, searching the library database, and attending an audio conference with their sister school in Japan. If network traffic is prioritized with QoS, how will the traffic be classified from highest priority to lowest priority?',
    'audio conference, database, HTTP');
add('During normal operation, from which location do most Cisco routers run the IOS?',
    'RAM');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?',
    'an SSH connection');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
    'Ctrl-Shift-6');
add('Refer to the exhibit. An administrator wants to change the name of a brand new switch, using the hostname command as shown. What prompt will display after the command is issued?',
    'Switch(config)#?');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?',
    'VLAN 1');
add('A technician uses the ping 127.0.0.1 command. What is the technician testing?',
    'the TCP/IP stack on a network host');
add('Which device should be used for enabling a host to communicate with another host on a different network?',
    'router');
add('A network technician is measuring the transfer of bits across the company backbone for a mission critical application. The technician notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
    'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('Which characteristics describe fiber optic cable? (Choose two.)',
    'It is not affected by EMI or RFI.','It is the most expensive type of LAN cabling');
add('What are two features of a physical, star network topology? (Choose two.)',
    'It is straightforward to troubleshoot.','It is easy to add and remove end devices.');
add('A frame is transmitted from one networking device to another. Why does the receiving device check the FCS field in the frame?',
    'to check the frame for possible transmission errors');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
    'It forwards the frame out of all ports except for the port at which the frame was received.');
add('Which switching method has the lowest level of latency?',
    'fast-forward');
add('Which parameter does the router use to choose the path to the destination when there are multiple routes available?',
    'the lower metric value that is associated with the destination network');
add('Which two statements describe the functions or characteristics of ROM in a router? (Choose two.)',
    'maintains instructions for POST diagnostics','stores bootstrap program');
add('Which statement describes a characteristic of the Cisco router management ports?',
    'A console port is not used for packet forwarding.');
add('What happens when part of an Internet radio transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?',
    '203.0.113.211');
add('Which three IP addresses are private ? (Choose three.)',
    '10.20.30.1','172.30.5.3','192.168.5.5');
add('What types of addresses make up the majority of addresses within the /8 block IPv4 bit space?',
    'public addresses');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
    '13');
add('A company has a network address of 192.168.1.64 with a subnet mask of 255.255.255.192. The company wants to create two subnetworks that would contain 10 hosts and 18 hosts respectively. Which two networks would achieve that? (Choose two.)',
    '192.168.1.64/27','192.168.1.96/28');
add('In a network that uses IPv4, what prefix would best fit a subnet containing 100 hosts?',
    '/25');
add('Which protocol supports rapid delivery of streaming media?',
    'Real-Time Transport Protocol');
add('Why would a network administrator use the tracert utility?',
    'to identify where a packet was lost or delayed on a network');
add('Refer to the exhibit. What is the significance of the asterisk (*) in the exhibited output?',
    'The asterisk designates which file system is the default file system.');
add('Which WLAN security protocol generates a new dynamic key each time a client establishes a connection with the AP?',
    'WPA');
add('Point-to-point communications where both devices can transmit and receive on the medium at the same time are known as',
    'full-duplex');
add('A host is accessing a Telnet server on a remote network. Which three functions are performed by intermediary network devices during this conversation? (Choose three.)',
    'regenerating data signals','applying security settings to control the flow of data','notifying other devices when errors occur');
add('Refer to the exhibit. Which area would most likely be an extranet for the company network that is shown?',
    'area C');
add('What is the purpose of having a converged network?',
    'to reduce the cost of deploying and maintaining the communication infrastructure');
add('Three office workers are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other office workers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
    'audio conference, financial transactions, web page');
add('During normal operation, from which location do most Cisco switches and routers run the IOS?',
    'RAM');
add('A network administrator is making changes to the configuration of a router. After making the changes and verifying the results, the administrator issues the copy running-config startup-config command. What will happen after this command executes?',
    'The configuration will load when the router is restarted.');
add('What information does the loopback test provide?',
    'The TCP/IP stack on the device is working correctly.');
add('What is a characteristic of the LLC sublayer?',
    'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?',
    'CSMA/CA');
add('What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?',
    'The switch drops the frame.');
add('Which destination address is used in an ARP request frame?',
    'FFFF.FFFF.FFFF');
add('What is the auto-MDIX feature on a switch?',
    'the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?',
    'store-and-forward switching');
add('What are the two main components of Cisco Express Forwarding (CEF)? (Choose two.)',
    'adjacency tables','forwarding information base (FIB)');
add('Which statement describes the sequence of processes executed by a router when it receives a packet from a host to be delivered to a host on another network?',
    'It de-encapsulates the packet, selects the appropriate path, and encapsulates the packet to forward it toward','the destination host.');
add('Which technology provides a solution to IPv4 address depletion by allowing multiple devices to share one public IP address?',
    'NAT');
add('Refer to the exhibit. Router R1 has two interfaces that were configured with correct IP addresses and subnet masks. Why does the show ip route command output not display any information about the directly connected networks?',
    'The no shutdown command was not issued on these interfaces.');
add('What happens when part of an Internet television transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
    'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify the destination web browser?',
    'the destination port number');
add('Which statement is true regarding the UDP client process during a session with a server?',
    'Datagrams that arrive in a different order than that in which they were sent are not placed in order.');
add('Which two components are configured via software in order for a PC to participate in a network environment? (Choose two.)',
    'IP address','subnet mask');
add('What are three characteristics of multicast transmission? (Choose three.)',
    'A single packet can be sent to a group of hosts.','Multicast transmission can be used by routers to exchange routing information.','Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('Which two reasons generally make DHCP the preferred method of assigning IP addresses to hosts on large networks? (Choose two.)',
    'It eliminates most address configuration errors.','It reduces the burden on network support staff.');
add('What is the subnet address for the address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A::0');
add('Which two tasks are functions of the presentation layer? (Choose two.)',
    'compression','encryption');
add('What is the purpose of the network security authentication function?',
    'to require users to prove who they are');
add('Which type of wireless security makes use of dynamic encryption keys each time a client associates with an AP?',
    'WPA');
add('During data communications, a host may need to send a single message to a specific group of destination hosts simultaneously. This message is in the form of a message.',
    'Multicast');
add('Open the PT activity. Perform the tasks in the activity instructions and then fill in the blank. The Server0 message is',
    'winner');
add('A PC is configured to obtain an IP address automatically from network 192.168.1.0/24. The network administrator issues the arp –a command and notices an entry of 192.168.1.255 ff-ff-ff-ff-ff-ff. Which statement describes this entry?',
    'This is a static map entry.');
add('Which field in an IPv4 packet header will typically stay the same during its transmission?',
    'Destination Address');
add('Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which IPv6 address is assigned to the Serial0/0/0 interface on RT2?',
    '2001:db8:abc:5::1');
add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?',
    'audio conference, financial transactions, web page');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?',
    'secretin');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)',
    'data link layer addressing','detection of errors through CRC calculations','delimiting groups of bits into frames');
add('What must be configured to enable Cisco Express Forwarding (CEF) on most Cisco devices that perform Layer 3 switching?',
    'CEF is enabled by default, so no configuration is necessary.');
add('What is the purpose of adjacency tables as used in Cisco Express Forwarding (CEF)?',
    'to maintain Layer 2 next-hop addresses');
add('Which statement describes a characteristic of the network layer in the OSI model?',
    'Its protocols specify the packet structure and processing used to carry the data from one host to another.');
add('A user gets an IP address of 192.168.0.1 from the company network administrator. A friend of the user at a different company gets the same IP address on another PC. How can two PCs use the same IP address and still reach the Internet, send and receive email, and search the web?',
    'ISPs use Network Address Translation to change a user IP address into an address that can be used on the Internet.');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
    'link-local');
add('Why does HTTP use TCP as the transport layer protocol?',
    'because HTTP requires reliable delivery');
add('What is the binary representation of 0xCA?',
    '11001010');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
    '2001:DB8:0:AB00::1234');
add('Refer to the exhibit. What is the maximum TTL value that is used to reach the destination www.cisco.com?',
    '13');
add('What field content is used by ICMPv6 to determine that a packet has expired?',
    'Hop Limit field');
add('Which statement is true about variable-length subnet masking?',
    'The size of each subnet may be different, depending on requirements.');
add('Which firewall technique blocks incoming packets unless they are responses to internal requests?',
    'stateful packet inspection');
add('A network technician is investigating network connectivity from a PC to a remote host with the address 10.1.1.5. Which command issued on the PC will return to the technician the complete path to the remote host?',
    'tracert 10.1.1.5');
add('To prevent faulty network devices from carrying dangerous voltage levels, equipment must be correctly',
    'grounded');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)',
    'the amount of traffic that is currently crossing the network','the type of traffic that is crossing the network','the latency that is created by the number of network devices that the data is crossing');
add('What is a possible hazard that can be caused by network cables in a fire?',
    'The cable insulation could be flammable.');
add('What device is commonly used to verify a UTP cable?',
    'a cable tester');
add('What needs to be checked when testing a UTP network cable?',
    'wire map');
add('Refer to the exhibit. A ping to PC2 is issued from PC0, PC1, and PC3 in this exact order. Which MAC addresses will be contained in the S1 MAC address table that is associated with the Fa0/1 port?',
    'just PC0 and PC1 MAC addresses');
add('Which function is provided by TCP?',
    'detection of missing packets');
add('What does a router use to determine where to send data it receives from the network?',
    'a routing table');
add('Which router interface should be used for direct remote access to the router via a modem?',
    'an AUX port');
add('A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?',
    'any line configuration mode');
add('Which three statements characterize the transport layer protocols? (Choose three.)',
    'TCP and UDP port numbers are used by application layer protocols.','TCP uses windowing and sequencing to provide reliable transfer of data.','TCP is a connection-oriented protocol. UDP is a connectionless protocol.');
add('Refer to the exhibit. A TCP segment from a server has been captured by Wireshark, which is running on a host. What acknowledgement number will the host return for the TCP segment that has been received?',
    '306');
add('Which statement is true about an interface that is configured with the IPv6 address command?',
    'A link-local IPv6 address is automatically configured on the interface.');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?',
    'default gateway address');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
    '172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
    '10.1.1.128/28','10.1.1.144/28','10.1.1.160/29');
add('How many additional bits should be borrowed from a /26 subnet mask in order to create subnets for WAN links that need only 2 useable addresses?',
    '4');
add('A topology influences the type of network framing and media access control that will be used.',
    'logical');
add('Refer to the exhibit. The administrator configured the access to the console and the vty lines of a router. Which conclusion can be drawn from this configuration?​',
    'Because the IOS includes the login command on the vty lines by default, access to the device via Telnet will require authentication.');
add('An administrator issued the service password-encryption command to apply encryption to the passwords configured for enable password, vty, and console lines. What will be the consequences if the administrator later issues the no service password-encryption command?',
    'It will not reverse any encryption.');
add('After making configuration changes, a network administrator issues a copy running-config startup-config command in a Cisco switch. What is the result of issuing this command?',
    'The new configuration will be loaded if the switch is restarted.');
add('What are two features of ARP? (Choose two.',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('What are two examples of the cut-through switching method? (Choose two.)',
    'fast-forward switching','fragment-free switching');
add('A network administrator is enabling services on a newly installed server. Which two statements describe how services are used on a server? (Choose two.)',
    'A port is considered to be open when it has an active server application that is assigned to it.','Server security can be improved by closing ports that are associated with unused services.');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?',
    'to identify the network address of the destination network');
add('Given the binary address of 11101100 00010001 00001100 00001010, which address does this represent in dotted decimal format?',
    '236.17.12.10');
add('A particular telnet site does not appear to be responding on a Windows 7 computer. What command could the technician use to show any cached DNS entries for this web page?',
    'ipconfig /displaydns');
add('Network devices come in two physical configurations. Devices that have expansion slots that provide the flexibility to add new modules have a configuration.',
    'Modular');
add('Refer to the exhibit. What is the maximum TIL value that is used to reach the destination www.cisco.com?',
    '13');
add('Which statement is true about DHCP operation?',
    'When a device that is configured to use DHCP boots, the client broadcasts a DHCPDISCOVER message to identify any available DHCP servers on the networK.');
add('Which type of wireless security is easily compromised?',
    'WEP');
add('A network administrator notices that the throughput on the network appears lower than expected when compared to the end-to-end network bandwidth. Which three factors can explain this difference? (Choose three.)',
    'the amount of traffic','the type of traffic','the number and type of network devices that the data is crossing');
add('A host PC is attempting to lease an address through DHCP. What message is sent by the server to the client know it is able to use the provided IP information?',
    'DHCPOFFER');
add('A network administrator is configuring access control to switch SW1. If the administrator uses console line to connect to the switch, which password is needed to access user EXEC mode?',
    'lineconin');
add('What is a characteristic of UTP cabling?',
    'cancellation');
add('How many bits would need to be borrowed if a network admin were given the IP addressing scheme of 172.16.0.0/16 and needed no more than 16 subnet with equal number of hosts?',
    '4');
add('It will give 4 options about ping, the correct one is:',
    'The PC2 will be able to ping 192.168.1.1');
add('Which statement best describes the operation of the File Transfer Protocol?',
    'An FTP server uses a source port number of 20 and a randomly generated destination port number during the establishment of control traffic with an FTP client.');
add('A client is establishing a TCP session with a server. How is the acknowledgment number in the response segment to the client determined?',
    'The acknowledgment number field is modified by adding 1 to the randomly chosen initial sequence number in response to the client.');
add('Why does layer 3 device perform the ANDing process on a destination IP and subnet Mask?',
    'to identify network address of destination host;');
add('There was also a question about if you activated service password encryption in the past and you prompt “no service password encryption” what password are modified ?',
    'no password at all;');
add('What type of communication rule would best describe CSMA/CD?',
    'access method');
add('What is the primary reason to subnet IPv6 prefixes?',
    'to create a hierarchical Layer 3 network design');
add('What type of IPv6 address is FE80::1?',
    'link-local');
add('Which statement describes data throughput?',
    'It is the measure of the bits transferred across the media over a given period of time.');
add('IPv4 multicast addresses are directly mapped to IEEE 802 (Ethernet) MAC addresses using the last of the 28 available bits in the IPv4 multicast group address.',
    '4');
add('How could a faulty network device create a source of hazard for a user? (Choose two.)',
    'It could stop functioning.','It could explode.');
add('What are three important considerations when planning the structure of an IP addressing scheme? (Choose three.)',
    'preventing duplication of addresses','providing and controlling access','conserving addresses');
add('What is the metric value that is used to reach the 10.1.1.0 network in the following routing table entry? D 10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0',
    '2170112');
add('Which two services or protocols use the preferred UDP protocol for fast transmission and low overhead? (Choose two)',
    'VoIP','DNS');
add('What action does a DHCPv4 client take if it receives more than one DHCPOFFER from multiple DHCP servers?',
    'It sends a DHCPREQUEST that identifies which lease offer the client is accepting.');
add('To what legacy address class does the address 10.0.0.0 belong?',
    'Class A');
add('What type of communication medium is used with a wireless LAN connection?',
    'microwave');
add('Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?',
    'SLAAC');
add('What is a characteristic of DNS?',
    'DNS servers can cache recent queries to reduce DNS query traffic.');
add('What is the prefix for the host address 2001:DB8:BC15:A:12AB::1/64?',
    '2001:DB8:BC15:A');
add('What are two services provided by the OSI network layer? (Choose two.)',
    'encapsulating PDUs from the transport layer','routing packets toward the destination');
add('A network administrator is upgrading a small business network to give high priority to real-time applications traffic. What two types of network services is the network administrator trying to accommodate? (Choose two.)',
    'voice','video');

/*V5.1 Practice Final Exam*/
add('Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?',
    'extranet');
add('A small business user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?',
    'DSL');
add('Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?',
    'The administrator must first enter privileged EXEC mode before issuing the command.');
add('Which keys act as a hot key combination that is used to interrupt an IOS process?',
    'Ctrl-Shift-6');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?',
    'linevtyin');
add('A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?',
    'This command prevents someone from viewing the running configuration passwords.');
add('What is the purpose of the SVI on a Cisco switch?',
    'The SVI provides a virtual interface for remote access to the switch.');
add('Which message delivery option is used when all devices need to receive the same message simultaneously?',
    'broadcast');
add('Which two protocols function at the internet layer? (Choose two.)',
    'ICMP','IP');
add('What PDU is associated with the transport layer?',
    'segment');
add('What is done to an IP packet before it is transmitted over the physical medium?',
    'It is encapsulated in a Layer 2 frame.');
add('What type of communication medium is used with a wireless LAN connection?',
    'radio waves');
add('In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)',
    'crosstalk','electromagnetic interference');
add('What are the two sublayers of the OSI model data link layer? (Choose two.)',
    'LLC','MAC');
add('A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?',
    'mesh');
add('What type of communication rule would best describe CSMA/CD?',
    'access method');
add('If data is being sent over a wireless network, then connects to an Ethernet network, and eventually connects to a DSL connection, which header will be replaced each time the data travels through a network infrastructure device?',
    'data link');
add('What best describes the destination IPv4 address that is used by multicasting?',
    'a single IP multicast address that is used by all destinations in a group');
add('In an Ethernet network, when a device receives a frame of 1200 bytes, what will it do?',
    'process the frame as it is');
add('What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?',
    'destination MAC address');
add('What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?',
    'It forwards the frame out of all ports except for the port at which the frame was received.');
add('What are two features of ARP? (Choose two.)',
    'If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.','If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.');
add('Which two services are required to enable a computer to receive dynamic IP addresses and access the Internet using domain names? (Choose two.)',
    'DNS','DHCP');
add('What is a basic characteristic of the IP protocol?',
    'connectionless');
add('Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?',
    'fe80::30d0:115:3f57:fe4c/128');
add('Which two statements correctly describe a router memory type and its contents? (Choose two.)',
    'RAM is volatile and stores the IP routing table.','ROM is nonvolatile and contains basic diagnostic software.');
add('What three blocks of addresses are defined by RFC 1918 for private network use? (Choose three.)',
    '10.0.0.0/8','172.16.0.0/12','192.168.0.0/16');
add('What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?',
    '2001:DB8:0:AB00::1234');
add('At a minimum, which address is required on IPv6-enabled interfaces?',
    'link-local');
add('An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?',
    'all IPv6 configured routers on the local link');
add('What is the purpose of ICMP messages?',
    'to provide feedback of IP packet transmissions');
add('Which statement describes a characteristic of the traceroute utility?',
    'It identifies the routers in the path from a source host to a destination host.');
add('What is the usable number of host IP addresses on a network that has a /26 mask?',
    '62');
add('Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?',
    '172.16.19.255');
add('A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?',
    '10.1.1.128/28','10.1.1.144/28','10.1.1.160/29');
add('Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?',
    '2001:db8:0:f000::/52');
add('A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?',
    'The data flow is being tracked based on the source port number utilized by each application');
add('What three services are provided by the transport layer? (Choose three.)',
    'flow control','connection establishment','error recovery');
add('An Internet television transmission is using UDP. What happens when part of the transmission is not delivered to the destination?',
    'The transmission continues without the missing portion.');
add('Which two OSI model layers are considered to be included in the top layer of the TCP/IP protocol stack? (Choose two.)',
    'presentation','session');
add('An author is uploading one chapter document from a personal computer to a file server of a book publisher. What role is the personal computer assuming in this network model?',
    'client');
add('Which two automatic addressing assignments are supported by DHCP? (Choose two.)',
    'subnet mask','default gateway address');
add('When a network administrator is trying to manage network traffic on a growing network, when should traffic flow patterns be analyzed?',
    'during times of peak utilization');
add('What is the objective of a network reconnaissance attack?',
    'discovery and mapping of systems');
add('What will be the result of failed login attempts if the following command is entered into a router? login block-for 150 attempts 4 within 90',
    'All login attempts will be blocked for 150 seconds if there are 4 failed attempts within 90 seconds.');
add('What is an advantage of storing configuration files to a USB flash drive instead of to a TFTP server?',
    'The transfer of the files does not rely on network connectivity');
//CCNA7

add('What is a characteristic of a fault tolerant network?', 'a network that recovers quickly when a failure occurs and depends on redundancy to limit the impact of a failure');
add('Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?', ' audio conference, financial transactions, web page');
add('What is a benefit of using cloud computing in networking?', 'Network capabilities are extended without requiring investment in new infrastructure, personnel, or software.');
add('What is the function of the shell in an OS?', 'It interfaces between the users and the kernel.');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?', 'an SSH connection');
add('A network technician is attempting to configure an interface by entering the following command: SanJose(config)# ip address 192.168.2.1 255.255.255.0. The command is rejected by the device. What is the reason for this?', 'The command is being entered from the wrong mode of operation.');
add('An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?', 'to interrupt the ping process');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses a console connection to connect to the switch, which password is needed to access user EXEC mode?', 'lineconin');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?', 'VLAN 1');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?', 'TCP');
add('What is an advantage to using a protocol that is defined by an open standard?', 'It encourages competition and promotes choices.');
add('What are two benefits of using a layered network model? (Choose two.)', 'It assists in protocol design. ', 'It speeds up packet delivery. ', 'It speeds up packet delivery.', 'It prevents technology in one layer from affecting other layers.');
add('Which two OSI model layers have the same functionality as two layers of the TCP/IP model? (Choose two.)', 'network', 'transport');
add('Which name is assigned to the transport layer PDU?', 'segment');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?', 'physical layer');
add('A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)', 'the amount of traffic that is currently crossing the network', 'the type of traffic that is crossing the network ', 'the latency that is created by the number of network devices that the data is crossing');
add('What is a characteristic of UTP cabling?', 'cancellation');
add('What are two characteristics of fiber-optic cable? (Choose two.)', 'It is not affected by EMI or RFI.', 'It is more expensive than UTP cabling is.');
add('What is a characteristic of the LLC sublayer?', 'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?', 'partial mesh');
add('What method is used to manage contention-based access on a wireless network?', 'CSMA/CA');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)', 'data link layer addressing', 'detection of errors through CRC calculations ', 'delimiting groups of bits into frames');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?', 'It will discard the frame.');
add('Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?', 'store-and-forward switching');
add('Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?', 'BB:BB:BB:BB:BB:BB');
add('What addresses are mapped by ARP?', 'destination MAC address to a destination IPv4 address');
add('What are two services provided by the OSI network layer? (Choose two.)', 'routing packets toward the destination ', 'encapsulating PDUs from the transport layer');
add('What are two functions of NVRAM? (Choose two.)', 'to retain contents when power is removed ', 'to store the startup configuration file');
add('Refer to the exhibit. What will be the result of entering this configuration the next time a network administrator connects a console cable to the router and no additional commands have been entered?', 'The administrator will be presented with the R1> prompt.');
add('What is the dotted decimal representation of the IPv4 address 11001011.00000000.01110001.11010011?', '203.0.113.211');
add('What are three characteristics of multicast transmission? (Choose three.)', 'A single packet can be sent to a group of hosts. ', 'Multicast transmission can be used by routers to exchange routing information. ', 'Routers will not forward multicast addresses in the range of 224.0.0.0 to 224.0.0.255.');
add('What are the three ranges of IP addresses that are reserved for internal private use? (Choose three.)', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('What purpose does NAT64 serve in IPv6?', 'It converts IPv6 packets into IPv4 packets.');
add('What is the most compressed representation of the IPv6 address 2001:0000:0000:abcd:0000:0000:0000:0001?', '2001:0:0:abcd::1');
add('Which range of link-local addresses can be assigned to an IPv6-enabled interface?', 'FE80::/10');
add('How many valid host addresses are available on an IPv4 subnet that is configured with a /26 mask?', '62');
add('A site administrator has been told that a particular network at the site must accommodate 126 hosts. Which subnet mask would be used that contains the required number of host bits?', '255.255.255.128');
add('Which subnet would include the address 192.168.1.96 as a usable host address?', '192.168.1.64/26');
add('Which statement is true about variable-length subnet masking?', 'The size of each subnet may be different, depending on requirements.');
add('Which scenario describes a function provided by the transport layer?', 'A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.');
add('A user opens three browsers on the same PC to access www.cisco.com to search for certification course information. The Cisco web server sends a datagram as a reply to the request from one of the web browsers. Which information is used by the TCP/IP protocol stack in the PC to identify which of the three web browsers should receive the reply?', 'the destination port number');
add('What are two ways that TCP uses the sequence numbers in a segment? (Choose two.)', 'to identify missing segments at the destination ', 'to reassemble the segments at the remote location');
add('Which two tasks are functions of the presentation layer? (Choose two.)', 'compression', 'encryption');
add('What is a key characteristic of the peer-to-peer networking model?', 'resource sharing without a dedicated server');
add('A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?', 'nslookup', '.com');
add('A PC obtains its IP address from a DHCP server. If the PC is taken off the network for repair, what happens to the IP address configuration?', 'The address is returned to the pool for reuse when the lease expires.');
add('A wireless host needs to request an IP address. What protocol would be used to process the request?', 'DHCP');
add('Which example of malicious code would be classified as a Trojan horse?', 'malware that was written to look like a video game');
add('When applied to a router, which command would help mitigate brute-force password attacks against the router?', 'login block-for 60 attempts 5 within 60', 'Match the description with the associated IOS mode. (not all options are used.)', 'Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)');
add('A company is expanding its business to other countries. All branch offices must remain connected to corporate headquarters at all times. Which network technology is required to support this requirement?', 'WAN');
add('A home user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?', ' DSL');
add('How does quality of service help a network support a wide range of applications and services?', 'by providing mechanisms to manage congested network traffic');
add('On which switch interface would an administrator configure an IP address so that the switch can be managed remotely?', 'VLAN 1');
add('After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?', 'The new configuration will be loaded if the switch is restarted.');
add('Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator has already logged into a Telnet session on the switch, which password is needed to access privileged EXEC mode?', ' letmein', ' secretin', ' secretin', ' lineconin', 'linevtyin');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?', 'an SSH connection');
add('A network technician is attempting to configure an interface by entering the following command: SanJose(config)# ip address 192.168.2.1 255.255.255.0. The command is rejected by the device. What is the reason for this?', 'an SSH connection');
add('A network technician is attempting to configure an interface by entering the following command: SanJose(config)# ip address 192.168.2.1 255.255.255.0. The command is rejected by the device. What is the reason for this?', 'The command is being entered from the wrong mode of operation.');
add('What function does pressing the Tab key have when entering a command in IOS?', 'It completes the remainder of a partially typed word in a command.');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?', ' TCP');
add('What layer is responsible for routing messages through an internetwork in the TCP/IP model?', 'internet');
add('Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?', 'Segments are sent from the transport layer to the internet layer.');
add('What unique address is embedded in an Ethernet NIC and used for communication on an Ethernet network?', 'MAC address');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?', 'physical layer');
add('A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)', 'the amount of traffic that is currently crossing the network', 'the type of traffic that is crossing the network ', 'the latency that is created by the number of network devices that the data is crossing');
add('Which procedure is used to reduce the effect of crosstalk in copper cables?', 'twisting opposing circuit wire pairs together');
add('What is a characteristic of the LLC sublayer?', 'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What method is used to manage contention-based access on a wireless network?', 'CSMA/CA');
add('During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?', 'The physical address is added.');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)', 'data link layer addressing', 'detection of errors through CRC calculations ', 'delimiting groups of bits into frames');
add('What are two characteristics of Ethernet MAC addresses? (Choose two.)', 'They are globally unique.', 'They are expressed as 12 hexadecimal digits.');
add('If a device receives an Ethernet frame of 60 bytes, what will it do?', 'drop the frame');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?', 'It will discard the frame.');
add('Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)', 'The frame has the broadcast address as the destination address. ', 'The destination address is unknown to the switch.');
add('Which switching method has the lowest level of latency?', 'fast-forward');
add('Which two commands can be used on a Windows host to display the routing table? (Choose two.)', 'route print', 'netstat -r');
add('Which two functions are primary functions of a router? (Choose two.)', 'packet forwarding', 'path selection');
add('What are the three ranges of IP addresses that are reserved for internal private use? (Choose three.)', ' 10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('What purpose does NAT64 serve in IPv6?', 'It converts IPv6 packets into IPv4 packets.');
add('What is the binary representation of 0xCA?', '11001010', ' link-local');
add('Which service provides dynamic global IPv6 addressing to end devices without using a server that keeps a record of available IPv6 addresses?', 'SLAAC', 'It tests the internal configuration of an IPv6 host.');
add('How many usable IP addresses are available on the 192.168.1.0/27 network?', '30');
add('Which subnet would include the address 192.168.1.96 as a usable host address?', '192.168.1.64/26', 'A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices:Subnetwork A: IP phones \u2013 10 addressesSubnetwork B: PCs \u2013 8 addressesSubnetwork C: Printers \u2013 2 addresses');
add('What single subnet mask would be appropriate to use for the three subnetworks?', '255.255.255.240');
add('Which statement is true about variable-length subnet masking?', 'The size of each subnet may be different, depending on requirements.');
add('What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?', '255.255.255.192');
add('What are two characteristics shared by TCP and UDP? (Choose two.)', 'port numbering', 'use of checksum');
add('Why are port numbers included in the TCP header of a segment?', 'to enable a receiving host to forward the data to the appropriate application');
add('Which two protocols operate at the highest layer of the TCP/IP protocol stack? (Choose two.)', 'DNS', 'POP');
add('What is one difference between the client-server and peer-to-peer network models?', 'Every device in a peer-to-peer network can function as a client or a server.');
add('Which networking model is being used when an author uploads one chapter document to a file server of a book publisher?', 'client/server', 'DNS');
add('A network engineer is analyzing reports from a recently performed network baseline. Which situation would depict a possible latency issue?', 'an increase in host-to-host ping response times');
add('Which firewall feature is used to ensure that packets coming into a network are legitimate responses to requests initiated from internal hosts?', 'stateful packet inspection', 'Multicast\xa0 \xa0 \xa0 \xa0', 'Match the description with the associated IOS mode. (Not all options are used.)', 'Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)');
add('A medium-sized business is researching available options for connecting to the Internet. The company is looking for a high speed option with dedicated, symmetric access. Which connection type should the company choose?', 'leased line');
add('What is the purpose of having a converged network?', 'to reduce the cost of deploying and maintaining the communication infrastructure');
add('What characteristic of a network enables it to quickly grow to support new users and applications without impacting the performance of the service being delivered to existing users?', 'scalability');
add('Which connection provides a secure CLI session with encryption to a Cisco switch?', 'an SSH connection');
add('A network technician is attempting to configure an interface by entering the following command: SanJose(config)# ip address 192.168.2.1 255.255.255.0. The command is rejected by the device. What is the reason for this?', 'The command is being entered from the wrong mode of operation.');
add('After several configuration changes are made to a router, the copy running-configuration startup-configuration command is issued. Where will the changes be stored?', 'NVRAM');
add('Refer to the exhibit. From global configuration mode, an administrator is attempting to create a message-of-the-day banner by using the command banner motd V Authorized access only! Violators will be prosecuted! V When users log in using Telnet, the banner does not appear correctly. What is the problem?', 'The delimiting character appears in the banner message.');
add('What are three characteristics of an SVI? (Choose three.)', 'It is not associated with any physical interface on a switch.', 'It provides a means to remotely manage a switch. ', 'It is associated with VLAN1 by default.', 'SVI');
add('In computer communication, what is the purpose of message encoding?', 'to convert information to the appropriate form for transmission');
add('What protocol is responsible for controlling the size of segments and the rate at which segments are exchanged between a web client and a web server?', ' TCP');
add('What is the process of dividing a data stream into smaller pieces before transmission?', 'segmentation');
add('When IPv4 addressing is manually configured on a web server, which property of the IPv4 configuration identifies the network and host portion for an IPv4 address?', 'subnet mask');
add('A network administrator is troubleshooting connectivity issues on a server. Using a tester, the administrator notices that the signals generated by the server NIC are distorted and not usable. In which layer of the OSI model is the error categorized?', 'physical layer');
add('A network engineer is measuring the transfer of bits across the company backbone for a mission critical database application. The engineer notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)', 'the amount of traffic that is currently crossing the network', 'the type of traffic that is crossing the network', 'the latency that is created by the number of network devices that the data is crossing');
add('Which type of UTP cable is used to connect a PC to a switch port?', 'straight-through');
add('What is a characteristic of the LLC sublayer?', 'It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.');
add('What are the three primary functions provided by Layer 2 data encapsulation? (Choose three.)', 'data link layer addressing', 'detection of errors through CRC calculations ', 'delimiting groups of bits into frames');
add('What will a host on an Ethernet network do if it receives a frame with a destination MAC address that does not match its own MAC address?', 'It will discard the frame.');
add('What are two actions performed by a Cisco switch? (Choose two.)', 'using the source MAC addresses of frames to build and maintain a MAC address table', 'utilizing the MAC address table to forward frames via the destination MAC address');
add('What are two examples of the cut-through switching method? (Choose two.)', 'fast-forward switching', 'fragment-free switching');
add('What information is added during encapsulation at OSI Layer 3?', 'source and destination IP address');
add('Refer to the exhibit. The network administrator for a small advertising company has chosen to use the 192.168.5.96/27 network for internal LAN addressing. As shown in the exhibit, a static IP address is assigned to the company web server. However, the web server cannot access the Internet. The administrator verifies that local workstations with IP addresses that are assigned by a DHCP server can access the Internet, and the web server is able to ping local workstations. Which component is incorrectly configured?', 'default gateway address');
add('Why does a Layer 3 device perform the ANDing process on a destination IP address and subnet mask?', 'to identify the network address of the destination network');
add('What are the three ranges of IP addresses that are reserved for internal private use? (Choose three.)', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');
add('Which three addresses are valid public addresses? (Choose three.)', ' 198.133.219.17', '128.107.12.117', '64.104.78.227 ');
add('What type of IPv6 address is FE80::1?', 'link-local');
add('Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)', 'There is connectivity between this device and the device at 192.168.100.1.', 'There are 4 hops b', 'There are 4 hops b', 'etween this device and the device at 192.168.100.1.');
add('Which subnet would include the address 192.168.1.96 as a usable host address?', '192.168.1.64/26');
add('How many hosts are addressable on a network that has a mask of 255.255.255.248?', '6');
add('Which statement is true about variable-length subnet masking?', 'The size of each subnet may be different, depending on requirements.');
add('Refer to the exhibit. Consider the IP address of 192.168.10.0/24 that has been assigned to a high school building. The largest network in this building has 100 devices. If 192.168.10.0 is the network number for the largest network, what would be the network number for the next largest network, which has 40 devices?', '192.168.10.128');
add('In what two situations would UDP be the preferred transport protocol over TCP? (Choose two.)', 'when a faster delivery mechanism is needed', 'when applications do not need to guarantee delivery of the data');
add('What important information is added to the TCP/IP transport layer header to ensure communication and connectivity with a remote network device?', 'destination and source port numbers');
add('What is the TCP mechanism used in congestion avoidance?', 'sliding window');
add('Which three statements characterize UDP? (Choose three.)', 'UDP provides basic connectionless transport layer functions.', 'UDP relies on application layer protocols for error detection. ', 'UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.');
add('Which two protocols operate at the highest layer of the TCP/IP protocol stack? (Choose two.)', 'DNS', 'POP');
add('Which two roles can a computer assume in a peer-to-peer network where a file is being shared between two computers? (Choose two.)', 'client', 'server');
add('What is the function of the HTTP GET message?', 'to request an HTML page from a web server');
add('When planning for network growth, where in the network should packet captures take place to assess network traffic?', 'on as many different network segments as possible');
add('Refer to the exhibit. An administrator is testing connectivity to a remote device with the IP address 10.1.1.1. What does the output of this command indicate?', 'A router along the path did not have a route to the destination.', 'Match each item to the type of topology diagram on which it is typically identified. (Not all options are used.)', 'Match the description with the associated IOS mode. (Not all options are used.)', 'Match the situation with the appropriate use of network media.', 'Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)');

