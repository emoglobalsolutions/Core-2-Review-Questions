/* Add reviewed questions to this array. Quizzes use up to 100 unique questions from the bank. */
window.QUESTION_BANK = [
  {
    "id": "C2-001",
    "topic": "Operating Systems",
    "question": "Which Windows utility is used to view and manage running processes?",
    "options": ["Task Manager", "Disk Cleanup", "Device Manager", "File Explorer"],
    "answer": "Task Manager",
    "explanation": "Task Manager displays running applications and background processes and shows real-time performance information."
  },
  {
    "id": "C2-002",
    "topic": "Operating Systems",
    "question": "Which Windows command displays the current IP configuration?",
    "options": ["ipconfig", "format", "chkdsk", "sfc"],
    "answer": "ipconfig",
    "explanation": "ipconfig shows the current TCP/IP configuration, including IP address, subnet mask, and default gateway."
  },
  {
    "id": "C2-003",
    "topic": "Security",
    "question": "What is the primary purpose of multifactor authentication?",
    "options": ["Require two or more verification factors", "Encrypt every file automatically", "Increase internet speed", "Disable user accounts"],
    "answer": "Require two or more verification factors",
    "explanation": "MFA requires a user to present more than one proof of identity, such as a password and a code from a phone."
  },
  {
    "id": "C2-004",
    "topic": "Security",
    "question": "Which principle gives users only the access needed to perform their jobs?",
    "options": ["Least privilege", "Open access", "Single sign-on", "Non-repudiation"],
    "answer": "Least privilege",
    "explanation": "Least privilege minimizes damage by limiting each account to the minimum permissions necessary."
  },
  {
    "id": "C2-005",
    "topic": "Software Troubleshooting",
    "question": "A Windows computer displays a stop error and restarts. What is this commonly called?",
    "options": ["Blue Screen of Death", "POST beep", "Boot sector prompt", "Safe mode"],
    "answer": "Blue Screen of Death",
    "explanation": "A stop error in Windows is commonly known as the Blue Screen of Death, indicating a serious system failure."
  },
  {
    "id": "C2-006",
    "topic": "Software Troubleshooting",
    "question": "Which Windows tool can check and repair protected system files?",
    "options": ["System File Checker (sfc)", "Disk Defragmenter", "Notepad", "Paint"],
    "answer": "System File Checker (sfc)",
    "explanation": "sfc /scannow scans protected Windows system files and repairs them when possible."
  },
  {
    "id": "C2-007",
    "topic": "Operational Procedures",
    "question": "What should a technician do first before making changes to a customer's system?",
    "options": ["Identify the problem and establish a plan", "Replace the motherboard", "Delete temporary files", "Reinstall the operating system"],
    "answer": "Identify the problem and establish a plan",
    "explanation": "A structured troubleshooting process begins with identifying the issue and creating a plan before changing hardware or software."
  },
  {
    "id": "C2-008",
    "topic": "Operational Procedures",
    "question": "Which document records the steps taken to resolve an IT issue?",
    "options": ["Incident documentation or ticket notes", "Asset advertisement", "User wallpaper", "Network map only"],
    "answer": "Incident documentation or ticket notes",
    "explanation": "Accurate ticket notes document symptoms, troubleshooting, and the final resolution."
  },
  {
    "id": "C2-009",
    "topic": "Security",
    "question": "Which type of malware encrypts a victim's files and demands payment?",
    "options": ["Ransomware", "Adware", "Rootkit", "Keylogger"],
    "answer": "Ransomware",
    "explanation": "Ransomware locks or encrypts data, then demands payment for the decryption key."
  },
  {
    "id": "C2-010",
    "topic": "Operating Systems",
    "question": "Which Windows feature allows a user to return system settings to an earlier restore point?",
    "options": ["System Restore", "Disk Management", "Task Scheduler", "Registry Editor"],
    "answer": "System Restore",
    "explanation": "System Restore can roll back program files and system settings to a known-good state."
  },
  {
    "id": "C2-011",
    "topic": "Operating Systems",
    "question": "Which Windows utility is used to uninstall or change programs installed on a PC?",
    "options": ["Apps & features", "Task Scheduler", "Device Manager", "Disk Cleanup"],
    "answer": "Apps & features",
    "explanation": "Apps & features is the standard interface for uninstalling or repairing installed applications."
  },
  {
    "id": "C2-012",
    "topic": "Operating Systems",
    "question": "What is the purpose of Disk Management in Windows?",
    "options": ["Create, delete, and format partitions and volumes", "Display browser history", "Modify network shares", "Open the registry"],
    "answer": "Create, delete, and format partitions and volumes",
    "explanation": "Disk Management helps administrators manage drives, partitions, volumes, and formatting."
  },
  {
    "id": "C2-013",
    "topic": "Operating Systems",
    "question": "Which command is used to check a drive for file system errors?",
    "options": ["chkdsk", "netstat", "ipconfig", "ping"],
    "answer": "chkdsk",
    "explanation": "chkdsk checks the integrity of the file system and can repair logical errors."
  },
  {
    "id": "C2-014",
    "topic": "Operating Systems",
    "question": "Which Windows feature is used to disable or enable startup programs?",
    "options": ["Task Manager Startup tab", "Disk Management", "System Restore", "PowerShell"],
    "answer": "Task Manager Startup tab",
    "explanation": "The Startup tab in Task Manager shows which programs launch during login."
  },
  {
    "id": "C2-015",
    "topic": "Operating Systems",
    "question": "What does the Windows command gpupdate /force do?",
    "options": ["Refreshes Group Policy settings immediately", "Deletes temporary files", "Resets the network adapter", "Formats the hard drive"],
    "answer": "Refreshes Group Policy settings immediately",
    "explanation": "gpupdate /force applies the latest Group Policy settings without waiting for a scheduled refresh."
  },
  {
    "id": "C2-016",
    "topic": "Operating Systems",
    "question": "Which security feature warns before allowing changes that require administrator permission?",
    "options": ["User Account Control", "File Explorer", "Task Scheduler", "Windows Defender"],
    "answer": "User Account Control",
    "explanation": "UAC helps prevent unauthorized system changes by prompting for elevated permissions."
  },
  {
    "id": "C2-017",
    "topic": "Operating Systems",
    "question": "What is the purpose of Windows Update?",
    "options": ["Download and install security and feature updates", "Delete temporary Internet files", "Format drives", "Repair hardware components"],
    "answer": "Download and install security and feature updates",
    "explanation": "Windows Update keeps the operating system and Microsoft software current with patches and improvements."
  },
  {
    "id": "C2-018",
    "topic": "Operating Systems",
    "question": "Which keyboard shortcut opens Task Manager quickly on Windows?",
    "options": ["Ctrl + Shift + Esc", "Alt + Tab", "Win + L", "Ctrl + Alt + Delete"],
    "answer": "Ctrl + Shift + Esc",
    "explanation": "Ctrl + Shift + Esc opens Task Manager directly without using the menu."
  },
  {
    "id": "C2-019",
    "topic": "Operating Systems",
    "question": "Which tool is used to view and manage hardware devices attached to a Windows computer?",
    "options": ["Device Manager", "Task Manager", "Disk Cleanup", "Notepad"],
    "answer": "Device Manager",
    "explanation": "Device Manager shows installed devices, drivers, and hardware status."
  },
  {
    "id": "C2-020",
    "topic": "Operating Systems",
    "question": "What does the command netstat show?",
    "options": ["Active network connections and listening ports", "Local user account names", "System file version details", "Disk usage percentages"],
    "answer": "Active network connections and listening ports",
    "explanation": "netstat displays active TCP/UDP connections and listening ports."
  },
  {
    "id": "C2-021",
    "topic": "Operating Systems",
    "question": "Which feature allows a user to start Windows with minimal drivers and services for troubleshooting?",
    "options": ["Safe Mode", "Hibernate", "Sleep", "Boot Camp"],
    "answer": "Safe Mode",
    "explanation": "Safe Mode loads only essential drivers and services to isolate software and driver problems."
  },
  {
    "id": "C2-022",
    "topic": "Operating Systems",
    "question": "Which Windows tool can be used to schedule a task to run automatically at a given time?",
    "options": ["Task Scheduler", "Notepad", "Disk Management", "Registry Editor"],
    "answer": "Task Scheduler",
    "explanation": "Task Scheduler automates tasks based on time, trigger, or event conditions."
  },
  {
    "id": "C2-023",
    "topic": "Operating Systems",
    "question": "Which utility is commonly used to free up disk space by removing temporary files?",
    "options": ["Disk Cleanup", "Event Viewer", "System Restore", "Windows Security"],
    "answer": "Disk Cleanup",
    "explanation": "Disk Cleanup removes temporary files, cached items, and other unnecessary files to free up space."
  },
  {
    "id": "C2-024",
    "topic": "Operating Systems",
    "question": "Which tool can be used to monitor application and system logs?",
    "options": ["Event Viewer", "System Information", "Taskbar settings", "Power Options"],
    "answer": "Event Viewer",
    "explanation": "Event Viewer records events from Windows and applications for troubleshooting."
  },
  {
    "id": "C2-025",
    "topic": "Operating Systems",
    "question": "Which option is typically used to start a Windows PC in recovery mode for repair tasks?",
    "options": ["Advanced Startup", "Control Panel", "Remote Desktop", "Safe mode"],
    "answer": "Advanced Startup",
    "explanation": "Advanced Startup provides access to recovery tools such as Startup Repair and Command Prompt."
  },
  {
    "id": "C2-026",
    "topic": "Security",
    "question": "Which security control uses something you know, something you have, or something you are?",
    "options": ["Multifactor authentication", "Disk partitioning", "Scheduled backup", "File permission inheritance"],
    "answer": "Multifactor authentication",
    "explanation": "MFA combines different authentication factors to improve security and reduce the chance of compromise."
  },
  {
    "id": "C2-027",
    "topic": "Security",
    "question": "Why is a firewall used on a network?",
    "options": ["To filter traffic and block unauthorized access", "To convert file formats", "To clean temporary files", "To update device drivers"],
    "answer": "To filter traffic and block unauthorized access",
    "explanation": "A firewall inspects and filters traffic based on rules to prevent unauthorized connections."
  },
  {
    "id": "C2-028",
    "topic": "Security",
    "question": "Which password policy best reduces brute-force attacks?",
    "options": ["Longer passwords with complexity requirements", "Leaving passwords on a sticky note", "Using the same password everywhere", "Disabling account lockouts"],
    "answer": "Longer passwords with complexity requirements",
    "explanation": "Strong passwords with length and complexity make guessing and brute-force attacks far more difficult."
  },
  {
    "id": "C2-029",
    "topic": "Security",
    "question": "What is the primary goal of encryption?",
    "options": ["Protect data confidentiality by making it unreadable without the key", "Increase processor speed", "Back up deleted files", "Defragment the drive"],
    "answer": "Protect data confidentiality by making it unreadable without the key",
    "explanation": "Encryption converts readable data into cipher text so unauthorized users cannot read it."
  },
  {
    "id": "C2-030",
    "topic": "Security",
    "question": "Which security term describes a fraudulent email or message designed to trick a user into revealing information?",
    "options": ["Phishing", "Ransomware", "Spoofing", "Spoofing"],
    "answer": "Phishing",
    "explanation": "Phishing uses deceptive communications to manipulate a user into disclosing credentials or sensitive data."
  },
  {
    "id": "C2-031",
    "topic": "Security",
    "question": "Which type of software is designed to detect and remove malicious programs?",
    "options": ["Antivirus or anti-malware", "Disk Cleanup", "Remote Assistance", "Windows Defender Firewall"],
    "answer": "Antivirus or anti-malware",
    "explanation": "Antivirus software scans for, identifies, and removes malicious software."
  },
  {
    "id": "C2-032",
    "topic": "Security",
    "question": "What is the purpose of a digital signature?",
    "options": ["Verify authenticity and integrity of a file or message", "Reduce memory usage", "Delete temporary internet files", "Compress a file to save space"],
    "answer": "Verify authenticity and integrity of a file or message",
    "explanation": "A digital signature confirms the sender and helps ensure the content has not been altered."
  },
  {
    "id": "C2-033",
    "topic": "Security",
    "question": "Which security concept limits access based on job roles?",
    "options": ["Role-based access control", "Disk cleanup scheduling", "Device driver installation", "Automatic updates"],
    "answer": "Role-based access control",
    "explanation": "RBAC grants permissions based on a user's role within the organization."
  },
  {
    "id": "C2-034",
    "topic": "Security",
    "question": "What should a technician do before collecting potentially sensitive evidence from a device?",
    "options": ["Document chain of custody and follow policy", "Format the disk", "Delete the user profile", "Install new software"],
    "answer": "Document chain of custody and follow policy",
    "explanation": "Evidence handling must follow policy and be documented to preserve legal and forensic integrity."
  },
  {
    "id": "C2-035",
    "topic": "Security",
    "question": "Which type of attack tricks a user into visiting a fake website to steal credentials?",
    "options": ["Pharming", "Ransomware", "Rootkit", "Malvertising"],
    "answer": "Pharming",
    "explanation": "Pharming redirects users to fraudulent websites without their knowledge."
  },
  {
    "id": "C2-036",
    "topic": "Security",
    "question": "Which security control is most useful for preventing unauthorized physical access to a workstation?",
    "options": ["Locking the workstation and using secure access controls", "Running antivirus scans", "Changing wallpaper", "Deleting browser cache"],
    "answer": "Locking the workstation and using secure access controls",
    "explanation": "Physical access control is important to prevent unauthorized use of computers and devices."
  },
  {
    "id": "C2-037",
    "topic": "Security",
    "question": "What is the main concern when a system is left unpatched?",
    "options": ["Known vulnerabilities may be exploited", "The CPU will overheat", "The screen may freeze", "The file system cannot be cleaned"],
    "answer": "Known vulnerabilities may be exploited",
    "explanation": "Unpatched systems remain exposed to attackers who exploit known weaknesses."
  },
  {
    "id": "C2-038",
    "topic": "Security",
    "question": "Which Windows feature restricts programs from changing protected system files?",
    "options": ["Windows Defender Credential Guard", "File Explorer", "Remote Desktop", "Disk Cleanup"],
    "answer": "Windows Defender Credential Guard",
    "explanation": "Credential Guard protects credentials and reduces exposure to certain credential theft techniques."
  },
  {
    "id": "C2-039",
    "topic": "Security",
    "question": "What is the purpose of hashing?",
    "options": ["Verify data integrity by producing a fixed-size value from content", "Encrypt data in transit", "Boost internet connection speed", "Increase RAM size"],
    "answer": "Verify data integrity by producing a fixed-size value from content",
    "explanation": "Hashing creates a unique digest of data so changes can be detected."
  },
  {
    "id": "C2-040",
    "topic": "Security",
    "question": "Which security mechanism uses a second factor such as a code sent to a mobile phone?",
    "options": ["One-time password", "Data compression", "Registry backup", "Disk formatting"],
    "answer": "One-time password",
    "explanation": "A one-time password adds an additional verification factor beyond the usual password."
  },
  {
    "id": "C2-041",
    "topic": "Security",
    "question": "What does BYOD policy primarily address?",
    "options": ["Use of personally owned devices on company networks", "Purchase of new hardware", "Web browser settings", "Uninstalling drivers"],
    "answer": "Use of personally owned devices on company networks",
    "explanation": "BYOD policies define how personal devices can access enterprise resources securely."
  },
  {
    "id": "C2-042",
    "topic": "Security",
    "question": "Which security control best helps prevent unauthorized access to a laptop in a public area?",
    "options": ["Screen lock with password or PIN", "Replacing the battery", "Deleting browser history", "Installing a larger monitor"],
    "answer": "Screen lock with password or PIN",
    "explanation": "A screen lock prevents an unattended device from being accessed by another person."
  },
  {
    "id": "C2-043",
    "topic": "Security",
    "question": "What is the purpose of a security audit log?",
    "options": ["Record user actions and changes for review", "Create a backup of the operating system", "Automate software updates", "Clean dust from hardware"],
    "answer": "Record user actions and changes for review",
    "explanation": "Logs help administrators detect suspicious activity and investigate security events."
  },
  {
    "id": "C2-044",
    "topic": "Security",
    "question": "What do access control lists control?",
    "options": ["Which users or processes can access a resource", "Internet browser bookmarks", "Operating system language", "Fan speed settings"],
    "answer": "Which users or processes can access a resource",
    "explanation": "ACLs define permissions for users and systems accessing files, folders, and network resources."
  },
  {
    "id": "C2-045",
    "topic": "Security",
    "question": "Which practice helps prevent data loss from theft or accidental disclosure?",
    "options": ["Data encryption", "Deleting all backups", "Changing desktop colors", "Upgrading the mouse"],
    "answer": "Data encryption",
    "explanation": "Encryption protects data if a device or file is lost or stolen."
  },
  {
    "id": "C2-046",
    "topic": "Security",
    "question": "Which type of malware attempts to hide itself and maintain system access?",
    "options": ["Rootkit", "Adware", "Trojan horse", "Spyware"],
    "answer": "Rootkit",
    "explanation": "Rootkits are designed to hide malicious behavior and maintain unauthorized access."
  },
  {
    "id": "C2-047",
    "topic": "Security",
    "question": "What is the best defense against social engineering?",
    "options": ["User awareness training and verification of requests", "Disabling the firewall", "Changing the desktop theme", "Deleting the browser"],
    "answer": "User awareness training and verification of requests",
    "explanation": "Training helps users recognize manipulation and verify requests before sharing information or credentials."
  },
  {
    "id": "C2-048",
    "topic": "Security",
    "question": "Which security measure helps protect wireless networks from casual interception?",
    "options": ["WPA2 or WPA3 encryption", "A blank taskbar", "A larger monitor", "System Restore"],
    "answer": "WPA2 or WPA3 encryption",
    "explanation": "Wireless encryption encrypts traffic between the client and access point to prevent eavesdropping."
  },
  {
    "id": "C2-049",
    "topic": "Security",
    "question": "What is the purpose of a secure erase or wipe on a drive?",
    "options": ["Remove data so it cannot be recovered easily", "Increase disk speed", "Delete temporary files", "Install software updates"],
    "answer": "Remove data so it cannot be recovered easily",
    "explanation": "Secure erasure ensures that sensitive data is removed in a way that prevents easy recovery."
  },
  {
    "id": "C2-050",
    "topic": "Security",
    "question": "Why should default administrator passwords be changed?",
    "options": ["They are commonly known and represent a security risk", "They improve CPU performance", "They reduce website traffic", "They are required for safe mode"],
    "answer": "They are commonly known and represent a security risk",
    "explanation": "Default credentials are widely known and should be changed to reduce unauthorized access."
  },
  {
    "id": "C2-051",
    "topic": "Software Troubleshooting",
    "question": "Which Windows utility can display a log of application and system events?",
    "options": ["Event Viewer", "Control Panel", "Windows Security", "Disk Cleanup"],
    "answer": "Event Viewer",
    "explanation": "Event Viewer shows logs that help diagnose application, security, and system failures."
  },
  {
    "id": "C2-052",
    "topic": "Software Troubleshooting",
    "question": "A user says the computer boots to a black screen. What is the best first step?",
    "options": ["Check monitor connection and power status", "Reinstall the motherboard", "Delete all user files", "Format the drive"],
    "answer": "Check monitor connection and power status",
    "explanation": "Basic hardware checks should be performed before deeper troubleshooting."
  },
  {
    "id": "C2-053",
    "topic": "Software Troubleshooting",
    "question": "Which tool is used to examine and repair the Windows image store?",
    "options": ["DISM", "ping", "ipconfig", "netstat"],
    "answer": "DISM",
    "explanation": "DISM can repair system images and Windows component stores."
  },
  {
    "id": "C2-054",
    "topic": "Software Troubleshooting",
    "question": "What should a technician do when a program freezes and does not respond?",
    "options": ["Use Task Manager to end the unresponsive task", "Reformat the hard drive", "Disable the firewall", "Delete the users folder"],
    "answer": "Use Task Manager to end the unresponsive task",
    "explanation": "Task Manager allows the user to close or restart an unresponsive application."
  },
  {
    "id": "C2-055",
    "topic": "Software Troubleshooting",
    "question": "If a Windows system repeatedly fails during startup, which recovery option is often used first?",
    "options": ["Startup Repair", "Registry Editor", "Disk Cleanup", "System Restore"],
    "answer": "Startup Repair",
    "explanation": "Startup Repair can fix issues preventing Windows from starting correctly."
  },
  {
    "id": "C2-056",
    "topic": "Software Troubleshooting",
    "question": "Which diagnostic command checks connectivity between two hosts?",
    "options": ["ping", "chkdsk", "sfc", "msconfig"],
    "answer": "ping",
    "explanation": "ping sends ICMP echo requests to determine whether a host is reachable."
  },
  {
    "id": "C2-057",
    "topic": "Software Troubleshooting",
    "question": "A user reports that a printer is not printing. What is a common first check?",
    "options": ["Verify the printer is online and has paper and ink", "Delete the operating system", "Reinstall the CPU", "Reset the browser"],
    "answer": "Verify the printer is online and has paper and ink",
    "explanation": "Basic printer checks often solve the issue before deeper configuration work is required."
  },
  {
    "id": "C2-058",
    "topic": "Software Troubleshooting",
    "question": "What is the likely cause of unexpected restarts or shutdowns?",
    "options": ["Hardware failure, overheating, or driver issues", "A full recycle bin", "A missing desktop icon", "Too much wallpaper"],
    "answer": "Hardware failure, overheating, or driver issues",
    "explanation": "Unexpected restarts often indicate overheating, faulty hardware, or bad drivers."
  },
  {
    "id": "C2-059",
    "topic": "Software Troubleshooting",
    "question": "Which tool is used to check network connectivity to a remote host?",
    "options": ["ping", "Disk Management", "Task Scheduler", "Notepad"],
    "answer": "ping",
    "explanation": "ping verifies whether a remote host is reachable and how long the round-trip takes."
  },
  {
    "id": "C2-060",
    "topic": "Software Troubleshooting",
    "question": "A user reports that an application crashes on launch. What is a sensible first troubleshooting step?",
    "options": ["Check for updates and verify application compatibility", "Reinstall the motherboard", "Delete all drives", "Turn off the monitor"],
    "answer": "Check for updates and verify application compatibility",
    "explanation": "A crash on launch is often caused by missing updates, incompatible settings, or software conflicts."
  },
  {
    "id": "C2-061",
    "topic": "Software Troubleshooting",
    "question": "Which tool can help diagnose a slow computer by showing resource usage?",
    "options": ["Task Manager", "Disk Management", "Device Manager", "Notepad"],
    "answer": "Task Manager",
    "explanation": "Task Manager shows CPU, memory, disk, and process usage to identify performance bottlenecks."
  },
  {
    "id": "C2-062",
    "topic": "Software Troubleshooting",
    "question": "What should be checked first when a wireless network connection fails?",
    "options": ["Wi-Fi adapter status, signal strength, and network settings", "The printer cartridge", "The screen brightness", "The keyboard language"],
    "answer": "Wi-Fi adapter status, signal strength, and network settings",
    "explanation": "Wireless issues often stem from adapter state, signal quality, or incorrect network configuration."
  },
  {
    "id": "C2-063",
    "topic": "Software Troubleshooting",
    "question": "Which tool is useful to examine startup items that may slow a computer?",
    "options": ["Task Manager Startup tab", "Windows Calculator", "Power Options", "WordPad"],
    "answer": "Task Manager Startup tab",
    "explanation": "Startup items can be enabled or disabled to reduce boot time and system load."
  },
  {
    "id": "C2-064",
    "topic": "Software Troubleshooting",
    "question": "What is the impact of low disk space on a system?",
    "options": ["Performance degradation and inability to save files", "Faster boot times", "Lower Windows licensing cost", "Automatic removal of drivers"],
    "answer": "Performance degradation and inability to save files",
    "explanation": "Low disk space can affect system performance and prevent updates or new files from being created."
  },
  {
    "id": "C2-065",
    "topic": "Software Troubleshooting",
    "question": "Which Windows feature scans and repairs image files for the OS?",
    "options": ["DISM", "System Restore", "Security Center", "PowerShell"],
    "answer": "DISM",
    "explanation": "DISM repairs the Windows image and related components when system files are corrupted."
  },
  {
    "id": "C2-066",
    "topic": "Software Troubleshooting",
    "question": "Which tool allows a technician to identify file system errors on a drive?",
    "options": ["chkdsk", "ping", "nslookup", "whoami"],
    "answer": "chkdsk",
    "explanation": "chkdsk checks the volume for logical and physical file system issues."
  },
  {
    "id": "C2-067",
    "topic": "Software Troubleshooting",
    "question": "What is the likely result of a missing or corrupt device driver?",
    "options": ["The device may not work correctly or may not be detected", "The CPU may overclock automatically", "The monitor may stop receiving power", "The network will become faster"],
    "answer": "The device may not work correctly or may not be detected",
    "explanation": "Device drivers are required for hardware to communicate with the operating system."
  },
  {
    "id": "C2-068",
    "topic": "Software Troubleshooting",
    "question": "What does the Windows command nslookup do?",
    "options": ["Queries DNS records to resolve hostnames", "Shows running processes", "Installs updates", "Creates new files"],
    "answer": "Queries DNS records to resolve hostnames",
    "explanation": "nslookup is used to resolve domain names and diagnose DNS issues."
  },
  {
    "id": "C2-069",
    "topic": "Software Troubleshooting",
    "question": "If a computer keeps overheating, what should be checked first?",
    "options": ["Dust buildup and fan operation", "The keyboard layout", "The screen saver settings", "The default browser"],
    "answer": "Dust buildup and fan operation",
    "explanation": "Dust and failing fans can restrict airflow and cause thermal shutdowns."
  },
  {
    "id": "C2-070",
    "topic": "Software Troubleshooting",
    "question": "What is a common cause of application incompatibility after OS updates?",
    "options": ["Software not yet updated for the new OS version", "A full recycle bin", "Too many control panel items", "Slow Wi-Fi signal"],
    "answer": "Software not yet updated for the new OS version",
    "explanation": "Older software versions may not work correctly until they are updated or patched."
  },
  {
    "id": "C2-071",
    "topic": "Operational Procedures",
    "question": "What is the most important reason to document troubleshooting steps?",
    "options": ["To keep a clear record for future support and escalation", "To make the computer faster", "To lengthen the ticket", "To avoid backups"],
    "answer": "To keep a clear record for future support and escalation",
    "explanation": "Documentation helps technicians track findings, actions, and final outcomes for future reference."
  },
  {
    "id": "C2-072",
    "topic": "Operational Procedures",
    "question": "Before replacing a hardware component, what should a technician verify?",
    "options": ["The issue is correctly identified and the replacement part is compatible", "The system is fully formatted", "The user password has expired", "The monitor cable is unplugged"],
    "answer": "The issue is correctly identified and the replacement part is compatible",
    "explanation": "Verifying diagnosis and compatibility avoids unnecessary hardware replacement and additional downtime."
  },
  {
    "id": "C2-073",
    "topic": "Operational Procedures",
    "question": "What is the purpose of a backup before troubleshooting or repair?",
    "options": ["Protect data in case the repair changes or removes files", "Increase battery life", "Speed up network traffic", "Disable login prompts"],
    "answer": "Protect data in case the repair changes or removes files",
    "explanation": "Backups reduce the risk of permanent data loss if troubleshooting or repair affects user data."
  },
  {
    "id": "C2-074",
    "topic": "Operational Procedures",
    "question": "Which action is best when a customer reports a problem that cannot be resolved quickly?",
    "options": ["Escalate according to policy and communicate status", "Delete the user's data", "Restart the machine repeatedly", "Ignore the issue"],
    "answer": "Escalate according to policy and communicate status",
    "explanation": "Escalation and clear communication are key when the issue exceeds local troubleshooting scope."
  },
  {
    "id": "C2-075",
    "topic": "Operational Procedures",
    "question": "Which practice helps protect against electrostatic discharge while working on a PC?",
    "options": ["Use an antistatic wrist strap or grounded work surface", "Work while the power is on without protection", "Place the PC on carpet", "Touch the motherboard directly"],
    "answer": "Use an antistatic wrist strap or grounded work surface",
    "explanation": "ESD protection reduces the risk of damaging sensitive electronics with static electricity."
  },
  {
    "id": "C2-076",
    "topic": "Operational Procedures",
    "question": "What is the best practice when handling sensitive customer data in a support ticket?",
    "options": ["Minimize disclosure and follow privacy policy", "Post it publicly for review", "Share it with coworkers without need", "Store it in plain text on the desktop"],
    "answer": "Minimize disclosure and follow privacy policy",
    "explanation": "Privacy policies and data minimization help protect confidential customer information."
  },
  {
    "id": "C2-077",
    "topic": "Operational Procedures",
    "question": "Why should a technician verify a customer's identity before discussing account details?",
    "options": ["To prevent unauthorized access to private information", "To reduce call time", "To change the account password", "To improve hardware performance"],
    "answer": "To prevent unauthorized access to private information",
    "explanation": "Identity verification prevents disclosure of sensitive or confidential account information."
  },
  {
    "id": "C2-078",
    "topic": "Operational Procedures",
    "question": "Which practice is most appropriate when a user requests a change that could affect service availability?",
    "options": ["Follow change management and obtain approval before implementation", "Apply it immediately without notice", "Ignore the approval process", "Reboot the system without logging"],
    "answer": "Follow change management and obtain approval before implementation",
    "explanation": "Change management reduces risk by requiring review and controlled deployment of changes."
  },
  {
    "id": "C2-079",
    "topic": "Operational Procedures",
    "question": "What should a technician do when a customer becomes upset during support?",
    "options": ["Stay calm, listen, and communicate professionally", "Argue with the customer", "Hang up immediately", "Blame the software vendor"],
    "answer": "Stay calm, listen, and communicate professionally",
    "explanation": "Professional communication helps de-escalate conflict and maintain trust."
  },
  {
    "id": "C2-080",
    "topic": "Operational Procedures",
    "question": "Which action best protects the workplace from a spill or debris during IT repair?",
    "options": ["Keep the work area clean and organized", "Leave tools on the floor", "Ignore cable clutter", "Store spare parts in the server room"],
    "answer": "Keep the work area clean and organized",
    "explanation": "A clean work area reduces risk of accidents and helps maintain a safe repair environment."
  },
  {
    "id": "C2-081",
    "topic": "Operational Procedures",
    "question": "What is the purpose of a service-level agreement?",
    "options": ["Define expected service quality and response time commitments", "Set printer toner colors", "Reset firewall rules", "Install all software updates"],
    "answer": "Define expected service quality and response time commitments",
    "explanation": "An SLA sets expectations for uptime, response time, and service quality."
  },
  {
    "id": "C2-082",
    "topic": "Operational Procedures",
    "question": "Why should technicians label cables when working in a server room or office?",
    "options": ["To make troubleshooting and reassembly easier and safer", "To speed up software installation", "To improve Wi-Fi strength", "To delete logs automatically"],
    "answer": "To make troubleshooting and reassembly easier and safer",
    "explanation": "Labeling cables helps prevent errors during maintenance and future troubleshooting."
  },
  {
    "id": "C2-083",
    "topic": "Operational Procedures",
    "question": "What is the best way to dispose of old electronic equipment?",
    "options": ["Follow local e-waste and recycling procedures", "Throw it in the regular trash", "Leave it in a public area", "Burn it in a backyard"],
    "answer": "Follow local e-waste and recycling procedures",
    "explanation": "E-waste disposal must follow environmental and organizational guidelines to protect the environment and data."
  },
  {
    "id": "C2-084",
    "topic": "Operational Procedures",
    "question": "Which step is important before installing software on a work computer?",
    "options": ["Confirm compatibility, licensing, and user authorization", "Delete all user files", "Boot into Safe Mode", "Disable the firewall"],
    "answer": "Confirm compatibility, licensing, and user authorization",
    "explanation": "Proper verification reduces the risk of unsupported software installation or license violations."
  },
  {
    "id": "C2-085",
    "topic": "Operational Procedures",
    "question": "What should be done after resolving an IT issue?",
    "options": ["Document the final status and any follow-up tasks", "Leave the machine unplugged forever", "Delete the incident notes", "Ignore customer follow-up"],
    "answer": "Document the final status and any follow-up tasks",
    "explanation": "Proper closure ensures future technicians understand the fix and any outstanding items."
  },
  {
    "id": "C2-086",
    "topic": "Operational Procedures",
    "question": "Which type of document records the inventory and ownership of IT assets?",
    "options": ["Asset inventory", "User biography", "Network summary", "Antivirus log"],
    "answer": "Asset inventory",
    "explanation": "An asset inventory tracks hardware, software, and ownership for support and compliance."
  },
  {
    "id": "C2-087",
    "topic": "Operational Procedures",
    "question": "What is the purpose of a root cause analysis?",
    "options": ["Identify the underlying reason for a recurring issue", "Increase screen resolution", "Delete temp files", "Remove the audit log"],
    "answer": "Identify the underlying reason for a recurring issue",
    "explanation": "Root cause analysis helps prevent repeated failures by addressing the source of the problem."
  },
  {
    "id": "C2-088",
    "topic": "Operational Procedures",
    "question": "Which step is important before working inside a computer case?",
    "options": ["Power off the system and disconnect power", "Open the case while the machine is running", "Touch the motherboard with bare hands", "Remove all fans"],
    "answer": "Power off the system and disconnect power",
    "explanation": "Disconnecting power prevents electrical shock and hardware damage during repairs."
  },
  {
    "id": "C2-089",
    "topic": "Operational Procedures",
    "question": "Why should technicians keep a clean cable management system?",
    "options": ["To prevent obstruction, damage, and troubleshooting mistakes", "To increase CPU clock speed", "To make the device louder", "To reduce antivirus updates"],
    "answer": "To prevent obstruction, damage, and troubleshooting mistakes",
    "explanation": "Proper cable management improves safety, airflow, and maintenance efficiency."
  },
  {
    "id": "C2-090",
    "topic": "Operational Procedures",
    "question": "Which principle ensures that systems are updated in a controlled and approved manner?",
    "options": ["Change management", "Screen locking", "Disk cleanup", "Software piracy"],
    "answer": "Change management",
    "explanation": "Change management ensures that updates and modifications are reviewed, approved, and documented."
  },
  {
    "id": "C2-091",
    "topic": "Operational Procedures",
    "question": "What is the main benefit of testing a fix before closing a service ticket?",
    "options": ["Confirm the issue is resolved without causing new problems", "Reduce the number of customers", "Skip the documentation step", "Remove the need for backup"],
    "answer": "Confirm the issue is resolved without causing new problems",
    "explanation": "Testing verifies that the fix works and has not introduced additional issues."
  },
  {
    "id": "C2-092",
    "topic": "Operational Procedures",
    "question": "Which practice helps maintain professional service when dealing with customers?",
    "options": ["Clear communication, empathy, and regular updates", "Ignoring the customer's questions", "Working without confirming the issue", "Keeping all findings secret"],
    "answer": "Clear communication, empathy, and regular updates",
    "explanation": "Professional communication builds trust and keeps users informed during support."
  },
  {
    "id": "C2-093",
    "topic": "Operational Procedures",
    "question": "Why should a technician verify the exact issue before replacing hardware?",
    "options": ["To avoid unnecessary cost and wasted effort", "To improve file permissions", "To shorten warranty terms", "To remove recovery options"],
    "answer": "To avoid unnecessary cost and wasted effort",
    "explanation": "Proper diagnosis reduces unnecessary purchases and repairs."
  },
  {
    "id": "C2-094",
    "topic": "Operational Procedures",
    "question": "What is the role of a help desk ticket?",
    "options": ["Track the issue from intake to resolution", "Replace a damaged keyboard", "Disable Windows updates", "Store the user password in plain text"],
    "answer": "Track the issue from intake to resolution",
    "explanation": "A ticket records the problem, assigned technician, troubleshooting, and final outcome."
  },
  {
    "id": "C2-095",
    "topic": "Operational Procedures",
    "question": "Which practice helps maintain security during remote support sessions?",
    "options": ["Confirm identity, use approved tools, and keep sessions logged", "Share passwords in chat", "Leave the remote session open permanently", "Allow any user to control the screen"],
    "answer": "Confirm identity, use approved tools, and keep sessions logged",
    "explanation": "Secure remote support protects user data and helps maintain accountability."
  },
  {
    "id": "C2-096",
    "topic": "Operational Procedures",
    "question": "What is the best practice for installing software on multiple workstations?",
    "options": ["Follow approved deployment methods and licensing requirements", "Install random software from the web", "Use the same password for all machines", "Skip validation testing"],
    "answer": "Follow approved deployment methods and licensing requirements",
    "explanation": "Standardized deployment protects consistency, security, and licensing compliance."
  },
  {
    "id": "C2-097",
    "topic": "Operational Procedures",
    "question": "What is the purpose of a customer acceptance step after a repair?",
    "options": ["Confirm the service works and the customer is satisfied", "Delete the support record", "Reduce the warranty period", "Disconnect internet access"],
    "answer": "Confirm the service works and the customer is satisfied",
    "explanation": "Customer validation ensures the outcome meets expectations and the issue is actually resolved."
  },
  {
    "id": "C2-098",
    "topic": "Operational Procedures",
    "question": "Why are licensing and compliance checks important during installation or upgrade tasks?",
    "options": ["They ensure software use is legal and supported", "They make the device run faster", "They remove all old logs", "They eliminate all malware"],
    "answer": "They ensure software use is legal and supported",
    "explanation": "Licensing compliance protects the organization and avoids legal or support issues."
  },
  {
    "id": "C2-099",
    "topic": "Operational Procedures",
    "question": "What is the main purpose of a post-incident review?",
    "options": ["Identify lessons learned and improve future response", "Delete old tickets", "Reset user passwords", "Purchase more equipment immediately"],
    "answer": "Identify lessons learned and improve future response",
    "explanation": "Post-incident reviews help teams improve processes and reduce the chance of recurring problems."
  },
  {
    "id": "C2-100",
    "topic": "Operational Procedures",
    "question": "Which action best demonstrates professionalism during a technical support call?",
    "options": ["Listen carefully, explain clearly, and document the outcome", "Rush the customer to end the call", "Blame the customer for the problem", "Ignore the requested fix"],
    "answer": "Listen carefully, explain clearly, and document the outcome",
    "explanation": "Professional support combines active listening, clear communication, and accurate documentation."
  }
];
