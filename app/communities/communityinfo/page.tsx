'use client';
import { useState } from 'react';
import { Breadcrumb, ButtonGroup, Button, Card } from 'flowbite-react';
import InitiativeCard from "@/components/organization/Components/Card4/InitiativeCard";
import ProjectCard from "@/components/organization/Components/Card5/ProjectCard";
import UserProfile from "@/components/organization/Components/UserProfile/UserProfile";

const CommunityInfo = () => {
  const [activeTab, setActiveTab] = useState('about'); // Default active tab is 'about'

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <Breadcrumb.Item href="/communities">
          Communities
        </Breadcrumb.Item>
        <Breadcrumb.Item>Community Name</Breadcrumb.Item>
      </Breadcrumb>

      <div className="text-center"> 
        <Button.Group>
          <Button color="gray" onClick={() => handleTabChange('about')}>About</Button>
          <Button color="gray" onClick={() => handleTabChange('projects')}>Projects</Button>
          <Button color="gray" onClick={() => handleTabChange('members')}>Members</Button>
        </Button.Group>
      </div>
      <br></br>


          {activeTab === 'about' && (
                  <div className="bg-image relative h-96">
                  {/* Background Image */}
                  <img src="/images/image-3.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover z-0" />
          
                  {/* Conditional rendering based on activeTab */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Card className="bg-white rounded-lg shadow-lg p-8 max-w-4xl overflow-auto">
                <div className="flex gap-8">
                  <div className="flex flex-col justify-start items-start gap-5">
                    <div className="badge bg-green-100 rounded-full px-3 py-0.5">
                      <span className="text-emerald-900 text-sm font-semibold">Habitat Restoration</span>
                    </div>
                    <p className="text-gray-700 text-base font-normal w-60 leading-normal">Volunteer to restore and rehabilitate natural habitats such as forests, wetlands, and coastal areas to promote biodiversity and ecosystem health.</p>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-5">
                    <div className="badge bg-sky-100 rounded-full px-3 py-0.5">
                      <span className="text-blue-800 text-sm font-medium">Tree Planting</span>
                    </div>
                    <p className="text-gray-700 text-base font-normal w-60 leading-normal">Participate in tree planting initiatives to combat deforestation, improve air quality, and enhance carbon sequestration.</p>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-5">
                    <div className="badge bg-rose-100 rounded-full px-3 py-0.5">
                      <span className="text-red-800 text-sm font-medium">Wildlife Conservation</span>
                    </div>
                    <p className="text-gray-700 text-base font-normal w-60 leading-normal">Volunteer for projects focused on protecting and monitoring wildlife species, including endangered animals, to prevent habitat loss and extinction.</p>
                  </div>
                </div>
              </Card>
              </div>
          </div>
          )}
          

          {activeTab === 'projects' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                          <InitiativeCard />
                          <InitiativeCard />
                          <InitiativeCard />
                          <ProjectCard />
                          <ProjectCard />
                          <ProjectCard />
                        </div>
          )}
          {activeTab === 'members' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
              <UserProfile userName="John Doe" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Jane Smith" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Michael Johnson" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Emily Brown" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="David Williams" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Sarah Miller" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Daniel Davis" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Olivia Wilson" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="William Martinez" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Emma Thompson" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Noah Anderson" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Ava White" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Liam Harris" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Sophia Clark" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Mason Walker" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Isabella Turner" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Lucas King" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Mia Cooper" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Oliver Jackson" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Amelia Hill" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Ethan Wright" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Harper Scott" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Logan Green" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Aria Adams" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="James Baker" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Avery Nelson" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Benjamin Carter" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="Sofia Evans" profilePicture="/images/image-4.jpg" />
              <UserProfile userName="William Garcia" profilePicture="/images/image-4.jpg" />
            </div>

          )}
        </div>

  );
};

export default CommunityInfo;
