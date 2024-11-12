"use client"; 

import React, { useState } from 'react';
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from "../BoardView"
import List from "../ListView"
import Timeline from "../TimelineView"
import Table from "../TableView"
import ModalNewTask from '@/components/ModalNewTask'


type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={()=> setIsModalTaskOpen(false)}
        id={id}
        />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalTaskOpen} />
      )}
        {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalTaskOpen} />
      )}
    </div>
  );
};

export default Project;
