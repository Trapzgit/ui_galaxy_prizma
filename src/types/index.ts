export type EnvironmentType = 'TEST' | 'PROM';

export type Service = {
  id: string;
  name: string;
  description?: string;
};

export type Stand = {
  id: string;
  name: string;
  environmentType: EnvironmentType;
};

export type Server = {
  id: string;
  name: string;
  ip: string;
  dns?: string;
  standId: string;
};

export type ScenarioRunStatus = 'queued' | 'running' | 'completed' | 'failed';

export type ScenarioRun = {
  id: string;
  serviceId: string;
  standId: string;
  serverIds: string[];
  status: ScenarioRunStatus;
  createdAt: string;
  completedAt?: string;
};