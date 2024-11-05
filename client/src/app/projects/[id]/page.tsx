"use client"; 

import React, { useState } from 'react';
import ProjectHeader from '@/app/projects/ProjectHeader';

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);

  return (
    <div>
      {/* Modal */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Add any additional content here */}
    </div>
  );
};

export default Project;
